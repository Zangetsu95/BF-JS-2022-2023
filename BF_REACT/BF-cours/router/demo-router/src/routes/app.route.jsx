import ContactPage from "../pages/contact/contact.page"
import NotFound from "../pages/errors/not-found.page"
import HomePage from "../pages/home/home.page"

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
    path: "*",
    element: <NotFound />,
  },
]

export default appRoute
