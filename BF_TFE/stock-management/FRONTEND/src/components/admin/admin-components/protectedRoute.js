import { Navigate, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, condition, redirectTo, ...rest }) => {
    const location = useLocation();

    return (
        <Route
            {...rest}
            render={() =>
                condition ? (
                    children
                ) : (
                    <Navigate to={redirectTo} state={{ from: location }} />
                )
            }
        />
    );
};

export default ProtectedRoute;
