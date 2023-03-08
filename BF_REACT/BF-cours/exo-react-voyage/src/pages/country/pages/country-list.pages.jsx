import { useNavigate } from "react-router-dom"
import { fetchCountry } from "../../../api/country.api"
import CountryList from "../../../component/country-list/country-list"

const CountrIndexPage = () => {
  const country = fetchCountry()
  const navigate = useNavigate()

  const handleSelectedCountry = (id) => {
    navigate("/country/" + id)
  }

  return (
    <>
      <h2>These are our country</h2>
      <CountryList data={country} onSelectedCountry={handleSelectedCountry} />
    </>
  )
}

export default CountrIndexPage
