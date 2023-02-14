import { number } from "prop-types"
import { useState } from "react"

function estPremier(nombre) {
  if (nombre < 2) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(nombre); i++) {
    if (nombre % i === 0) {
      return false
    }
  }
  return true
}

const Compteur = (props) => {
  const [nb, setNb] = useState(props.data)
  const increment = () => {
    setNb(nb + 1)
  }

  const reset = () => {
    setNb(0)
  }

  const btnReset = <button onClick={reset}>Reset</button>
  const message = estPremier(nb)
    ? "Le nombre est premier."
    : "Le nombre n'est pas premier."

  return (
    <div>
      <p>Vous avez cliqué {nb}</p>
      <p></p>
      <button onClick={increment}>Cliquez ici</button>
      {nb > 0 && btnReset}
      <p>{message}</p>
    </div>
  )
}

export default Compteur
