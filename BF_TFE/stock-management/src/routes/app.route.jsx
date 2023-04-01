import NotFound from "../pages/errors/not-found.page"
import HomePage from "../pages/home/home.page"
import ProductIndexPage from "../pages/products/pages/product-list.page"
import ProductDetailsPage from "../pages/products/pages/product.detail.page"
import ProductPage from "../pages/products/products.page"

const appRoute = [
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
    children: [
      {
        index: true,
        element: <ProductIndexPage />,
      },
      {
        path: ":productId",
        element: <ProductDetailsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
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
