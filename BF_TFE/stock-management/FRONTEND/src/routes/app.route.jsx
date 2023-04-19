import SignIn from "../containers/login/signIn"
import SignUp from "../containers/register/signUp"
import NotFound from "../pages/errors/not-found.page"
import HomePage from "../pages/home/home.page"
import ProductIndexPage from "../pages/products/pages/product-list.page"
import ProductDetailsPage from "../pages/products/pages/product.detail.page"
import ProductPage from "../pages/products/products.page"
import adminRoute from "./admin.route"
import ProtectedRoute from "../components/protected-route/protectedRoute.component"

const appRoute = [
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "/product",
    element: (
      <ProtectedRoute>
        <ProductPage />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <ProductIndexPage />
          </ProtectedRoute>
        ),
      },
      {
        path: ":productId",
        element: (
          <ProtectedRoute>
            <ProductDetailsPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
  ...adminRoute,
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
