import CountryPage from "../pages/country/country.page"
import CountryDetailPage from "../pages/country/pages/country-detail.page"
import CountrIndexPage from "../pages/country/pages/country-list.pages"
import HomePage from "../pages/home/home.page"
import TendancePage from "../pages/tendances/tendances.page"

const appRoute = [
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "country",
    element: <CountryPage />,
    children: [
      {
        index: true,
        element: <CountrIndexPage />,
      },
      {
        path: ":countryId",
        element: <CountryDetailPage />,
      },
    ],
  },
  {
    path: "tendances",
    element: <TendancePage />,
  },
]

export default appRoute
