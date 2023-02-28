import AboutPage from "../pages/about/about-page"
import NotFound from "../pages/errors/not-found.page"
import FormationsPage from "../pages/formations/formations.page"
import HomePage from "../pages/home/home.page"

const appRoute = [
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "formations",
    element: <FormationsPage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]

export default appRoute
