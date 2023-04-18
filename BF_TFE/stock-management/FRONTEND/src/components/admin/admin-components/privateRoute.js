import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, roleRequired, ...rest }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const userRole = useSelector((state) => state.auth.role);

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated && userRole === roleRequired ? (
                    <Component {...props} />
                ) : (
                    <Navigate to="/" />
                )
            }
        />
    );
};

export default PrivateRoute;
