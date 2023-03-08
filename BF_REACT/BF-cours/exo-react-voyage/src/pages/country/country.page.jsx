import { Outlet } from "react-router-dom"

const CountryPage = () => {
  return (
    <>
      <h2>Our travels</h2>
      <Outlet />
    </>
  )
}

export default CountryPage
