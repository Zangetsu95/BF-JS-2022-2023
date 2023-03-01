import { useState } from "react"
import { fetchFormations } from "../../api/formations.api"
import style from "./home.module.css"

const HomePage = () => {
  const [searchText, SetSearchText] = useState("")
  const formations = fetchFormations()

  const filteredFormations = formations.filter((f) =>
    f.name.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <>
      <h1>Page d'accueil </h1>
      <img src="https://digitalcity.brussels/themes/custom/digitalcity_theme/logo.png"></img>
      <p>...</p>
      <h2>Vous cherchez une formation en particulier ?</h2>
      <input
        type="text"
        placeholder="Cherchez une formation"
        value={searchText}
        onChange={(e) => SetSearchText(e.target.value)}
      />
      <ul>
        {filteredFormations.map((formation) => (
          <li key={formation.id}>
            <a href={`/formations/${formation.id}`}>{formation.name}</a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default HomePage
