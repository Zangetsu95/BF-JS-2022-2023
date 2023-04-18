import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AdminRoute() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const userRole = useSelector((state) => state.auth.role);
    const location = useLocation();

    return isAuthenticated && userRole === "Admin" ? (
        <Outlet />
    ) : (
        <Navigate to="/" state={{ from: location }} />
    );
}