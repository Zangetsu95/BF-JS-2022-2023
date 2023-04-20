// import React from "react";
// import { Route, Redirect, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// const AdminRoute = ({ component: Component, ...rest }) => {
//     const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//     const userRole = useSelector((state) => state.auth.userRole);

//     return (
//         <Route
//             {...rest}
//             render={(props) =>
//                 isAuthenticated && userRole === "admin" ? (
//                     <Component {...props} />
//                 ) : (
//                     <Navigate to="/login" />
//                 )
//             }
//         />
//     );
// };

// export default AdminRoute;
