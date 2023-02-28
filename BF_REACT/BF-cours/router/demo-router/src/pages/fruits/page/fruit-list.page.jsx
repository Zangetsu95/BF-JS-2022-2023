import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { fetchFruits } from "../../../api/fruit.api"
import FruitsList from "../../../component/fruits-list/fruits-list"

const FruitsIndexPage = () => {
  const fruits = fetchFruits()
  const navigate = useNavigate()

  const handleSelectedFruits = (id) => {
    navigate("/fruit/" + id)
  }
  return (
    <>
      <h2>La liste des fruits</h2>
      <FruitsList data={fruits} onSelectedFruit={handleSelectedFruits} />
    </>
  )
}

export default FruitsIndexPage
