import { useNavigate } from "react-router-dom"
import { fetchFormations } from "../../../api/formations.api"
import FormationsList from "../../../component/formations-list/formations-list"

const FormationsIndexPage = () => {
  const formations = fetchFormations()
  const navigate = useNavigate()

  const handleSelectedFormations = (id) => {
    navigate("/formations/" + id)
  }

  return (
    <>
      <h2>Voici la liste des formations disponibles !</h2>
      <FormationsList
        data={formations}
        onSelectedFormations={handleSelectedFormations}
      />
    </>
  )
}

export default FormationsIndexPage
