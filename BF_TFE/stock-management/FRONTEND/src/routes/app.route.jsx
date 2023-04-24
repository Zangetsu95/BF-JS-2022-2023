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
import ProductDetailAdmin from "../components/admin/admin-components/product/product-detail.component"
import ProductCreateAdmin from "../components/admin/admin-components/product/product-create.component"
import SupplierDetailAdmin from "../components/admin/admin-components/supplier/supplier-detail.component"
import SupplierCreateAdmin from "../components/admin/admin-components/supplier/supplier-create.component"
import StockDetailAdmin from "../components/admin/admin-components/stocks/stocks-detail.component"
import CartConfirmation from "../pages/cart-confirmation/cartConfirmation.component"
import CategoryDetailAdmin from "../components/admin/admin-components/category/category-detail.component"
import CategoryCreateAdmin from "../components/admin/admin-components/category/category-create.component"

const appRoute = [
  //USER ROUTE
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
    path: "/cart",
    element: <CartConfirmation />,
  },
  //404 NOT FOUND
  {
    path: "*",
    element: <NotFound />,
  },
  //ADMIN PAGE
  {
    path: "/admin/*",
    element: <AdminDashboard />,
  },
  {
    path: "/admin/product/:id",
    element: <ProductDetailAdmin />,
  },
  {
    path: "/admin/create-product",
    element: <ProductCreateAdmin />,
  },
  {
    path: "/admin/supplier/:id",
    element: <SupplierDetailAdmin />,
  },
  {
    path: "/admin/create-supplier",
    element: <SupplierCreateAdmin />,
  },
  {
    path: "/admin/stocks/:id",
    element: <StockDetailAdmin />,
  },
  {
    path: "/admin/category/:id",
    element: <CategoryDetailAdmin />,
  },
  {
    path: "/admin/create-category",
    element: <CategoryCreateAdmin />,
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
