import ContactPage from "../pages/contact/contact.page"
import NotFound from "../pages/errors/not-found.page"
import FruitsPage from "../pages/fruits/fruits.page"
import HomePage from "../pages/home/home.page"
import FruitsIndexPage from "../pages/fruits/page/fruit-list.page"
import FruitsDetailPage from "../pages/fruits/page/fruit-detail.page"
import HookPage from "../pages/hook/hook.page"

//en vite mettre ce fichier en jsx, create app js simple
const appRoute = [
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "contact",
    element: <ContactPage />,
  },
  {
    path: "fruit",
    element: <FruitsPage />,
    children: [
      {
        index: true,
        element: <FruitsIndexPage />,
      },
      {
        path: ":fruitId",
        element: <FruitsDetailPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "hook",
    element: <HookPage />,
  },
]

export default appRoute
