import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { clearCart } from "./cartActions";

export const login = (email, password) => {
    return (dispatch) => {

        axios
            .post("http://127.0.0.1:5000/auth/login", { email, password })
            .then((response) => {
                const res = response.data;
                localStorage.setItem("jwt", JSON.stringify(res.access_token));
                console.log(res.access_token)

                const decodedJWT = jwt_decode(res.access_token);
                const userRole = decodedJWT.role;
                const userId = decodedJWT.user_id
                console.log(userRole)

                dispatch({ type: "SET_AUTHENTICATED", payload: true });
                dispatch({ type: "SET_USER_ROLE", payload: userRole });
                dispatch({ type: "SET_USER_ID", payload: userId });
            })
            .catch((error) => {
                console.log(error)
                console.log("user pas en db");
            });
    };
};

export const checkAuth = () => {
    return (dispatch) => {
        const jwt = localStorage.getItem("jwt")

        if (jwt) {
            dispatch({ type: "SET_AUTHENTICATED", payload: true });
        } else {
            dispatch({ type: "SET_UNAUTHENTICATED", payload: false });
        }
    }
}


export const logout = () => {
    return (dispatch) => {
        localStorage.removeItem("jwt");
        dispatch({ type: "SET_UNAUTHENTICATED" });
        localStorage.removeItem("userRole");
        localStorage.removeItem("userId")
        dispatch({ type: "SET_USER_ROLE", payload: null })
        dispatch(clearCart())
    };
};


export const signup = (username, email, password) => {
    return (dispatch) => {

        axios
            .post("http://127.0.0.1:5000/api/user", { username, email, password })
            .then((response) => {
                console.log(response)
                const newUser = response.data;
                dispatch({ type: "ADD_USER", payload: newUser });
                dispatch({ type: "SET_USER_CREATED", payload: true })

            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const resetUserCreated = () => {
    return (dispatch) => {
        dispatch({ type: "SET_USER_CREATED", payload: false });
    };
};