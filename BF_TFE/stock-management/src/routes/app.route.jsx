import NotFound from "../pages/errors/not-found.page"
import HomePage from "../pages/home/home.page"

const appRoute = [
  {
    path: "",
    element: <HomePage />,
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
