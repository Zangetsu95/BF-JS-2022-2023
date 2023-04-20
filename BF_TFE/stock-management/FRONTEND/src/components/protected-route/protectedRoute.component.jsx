// import React from "react"
// import { useSelector } from "react-redux"
// import { Navigate, Outlet, Route } from "react-router-dom"

// const ProtectedRoute = ({ element, path, roleRequired }) => {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
//   const userRole = useSelector((state) => state.auth.userRole)
//   console.log("isAuthenticated:", isAuthenticated)
//   console.log("userRole:", userRole)
//   console.log("roleRequired:", roleRequired)

//   const getRedirectPath = (role) => {
//     switch (role) {
//       case "admin":
//         return "/admin"
//       case "user":
//         return "/home"
//       default:
//         return "/login"
//     }
//   }

//   if (!isAuthenticated || (roleRequired && userRole !== roleRequired)) {
//     const redirectTo = isAuthenticated ? getRedirectPath(userRole) : "/login"
//     return <Navigate to={redirectTo} replace />
//   }

//   return (
//     <Route
//       path={path}
//       element={<React.Fragment>{element || <Outlet />}</React.Fragment>}
//     />
//   )
// }

// export default ProtectedRoute
