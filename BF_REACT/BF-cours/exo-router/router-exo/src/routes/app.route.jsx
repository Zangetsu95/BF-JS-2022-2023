import AboutPage from "../pages/about/about-page"
import NotFound from "../pages/errors/not-found.page"
import FormationsPage from "../pages/formations/formations.page"
import FormationsDetailPage from "../pages/formations/pages/formations-detail.page"
import FormationsIndexPage from "../pages/formations/pages/formations-list.page"
import HomePage from "../pages/home/home.page"

const appRoute = [
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "formations",
    element: <FormationsPage />,
    children: [
      {
        index: true,
        element: <FormationsIndexPage />,
      },
      {
        path: ":formationsId",
        element: <FormationsDetailPage />,
      },
    ],
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
