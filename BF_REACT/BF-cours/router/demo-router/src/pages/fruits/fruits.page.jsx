import { Outlet } from "react-router-dom"

const FruitsPage = () => {
  return (
    <>
      <h1>Fruits</h1>
      {/* list des fruits || detail d'un fruit */}
      <Outlet />
    </>
  )
}

export default FruitsPage
