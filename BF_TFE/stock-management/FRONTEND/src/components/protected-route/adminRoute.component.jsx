import { useSelector } from "react-redux"
import { useEffect } from "react"
import { useNavigate, useLocation, Navigate } from "react-router-dom"

function AdminRoute({ element }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const isAdmin = useSelector((state) => state.auth.isAdmin)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (isAuthenticated && !isAdmin) {
      console.log("isAuthenticated premiere condition :>> ", isAuthenticated)
      console.log("isAdmin premiere condition :>> ", isAdmin)
      navigate("/")
    }
  }, [isAuthenticated, isAdmin, navigate, location])

  if (isAuthenticated && isAdmin) {
    console.log("isAuthenticated deuxième condition :>> ", isAuthenticated)
    console.log("isAdmin :>> ", isAdmin)
    return <Navigate to="/admin" />
  } else {
    console.log("isAuthenticated else deuxieme :>> ", isAuthenticated)
    console.log("isAdmin :>> ", isAdmin)
    return <Navigate to="/login" />
  }
}

export default AdminRoute
