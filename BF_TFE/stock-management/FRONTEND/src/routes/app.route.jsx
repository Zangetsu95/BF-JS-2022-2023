import SignIn from "../containers/login/signIn"
import SignUp from "../containers/register/signUp"
import NotFound from "../pages/errors/not-found.page"
import HomePage from "../pages/home/home.page"
import ProductIndexPage from "../pages/products/pages/product-list.page"
import ProductDetailsPage from "../pages/products/pages/product.detail.page"
import ProductPage from "../pages/products/products.page"
import adminRoute from "./admin.route"
import ProtectedRoute from "../components/protected-route/protectedRoute.component"
import AdminDashboard from "../components/admin/dashboard/Dashboard"
import { Route, Routes } from "react-router-dom"
import React from "react"

const appRoute = [
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "/product/*",
    element: (
      <Routes>
        <Route path="/" element={<ProductIndexPage />} />
        <Route path=":productId" element={<ProductDetailsPage />} />
        <Route path="*" element={<ProductPage />} />
      </Routes>
    ),
  },
  {
    path: "/login/*",
    element: (
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    ),
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/admin/*",
    element: <AdminDashboard />,
  },
]

export default appRoute

{
  /* <div className="App">
<NavBar />
<div>
  <main>{routes}</main>
</div>
</div> */
}
