import axios from "axios";
import { useNavigate } from "react-router-dom";

export const login = (email, password) => {
    return (dispatch) => {

        axios
            .post("http://127.0.0.1:5000/auth/login", { email, password })
            .then((response) => {
                const res = response.data;
                const role = response.data.role
                localStorage.setItem("jwt", JSON.stringify(res.jwt));
                dispatch({ type: "SET_AUTHENTICATED", payload: true });
                dispatch({ type: "SET_USER_ROLE", payload: role });
            })
            .catch((error) => {
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