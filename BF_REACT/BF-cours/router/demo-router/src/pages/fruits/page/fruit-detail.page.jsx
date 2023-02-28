import { useParams } from "react-router-dom"
import { fetchDetailFruit } from "../../../api/fruit.api"
import FruitsDetail from "../../../component/fruits-details/fruits-detail"

const FruitsDetailPage = () => {
  const { fruitId } = useParams()

  const fruit = fetchDetailFruit(parseInt(fruitId))

  if (!fruit) {
    return (
      <>
        <h2>Element non trouvé (┬┬﹏┬┬)</h2>
      </>
    )
  }

  return (
    <>
      <h2>Detail</h2>
      <FruitsDetail {...fruit} />
    </>
  )
}

export default FruitsDetailPage
