import { useParams } from "react-router-dom"
import { fetchDetailsFormations } from "../../../api/formations.api"
import FormationsDetail from "../../../component/formations-detail/formations-detail"

const FormationsDetailPage = () => {
  const { formationsId } = useParams()

  const formation = fetchDetailsFormations(formationsId)

  if (!formation) {
    return (
      <>
        <h2>Element non trouvé (┬┬﹏┬┬)</h2>
      </>
    )
  }

  return (
    <>
      <h2>Detail</h2>
      <FormationsDetail {...formation} />
    </>
  )
}

export default FormationsDetailPage
