import axios from "axios";

export const login = (email, password) => {
    return (dispatch) => {

        axios
            .post("http://127.0.0.1:5000/auth/login", { email, password })
            .then((response) => {
                const res = response.data;
                localStorage.setItem("jwt", JSON.stringify(res.jwt));
                dispatch({ type: "SET_AUTHENTICATED", payload: true });
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