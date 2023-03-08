import { useParams } from "react-router-dom"
import {
  fetchDestinationCountry,
  fetchDetailsCountry,
} from "../../../api/country.api"
import CountryDetail from "../../../component/country-detail/country-detail"

const CountryDetailPage = () => {
  const { countryId } = useParams()
  const country = fetchDetailsCountry(countryId)
  const countryCity = fetchDestinationCountry(countryId)

  if (!country) {
    return (
      <>
        <h2>Element non trouvé (┬┬﹏┬┬)</h2>
      </>
    )
  }

  return (
    <>
      <h2>Detail</h2>
      <CountryDetail {...country} destinations={countryCity} />
    </>
  )
}

export default CountryDetailPage
