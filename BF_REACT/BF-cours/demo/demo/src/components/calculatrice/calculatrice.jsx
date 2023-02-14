import { useState } from "react"

const ExemplpeInput = function () {
  const [msg, setMsg] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="msg">Entrer un message</label>
      <input
        id="msg"
        type="text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <input type="submit" value="Envoyer" />
    </form>
  )
}

export default ExemplpeInput
