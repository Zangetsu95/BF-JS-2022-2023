import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom"

function ProtectedRoute({ children, element }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  if (isAuthenticated) {
    return children || element
  } else {
    ;<Navigate to="/login" />
  }
}

export default ProtectedRoute
