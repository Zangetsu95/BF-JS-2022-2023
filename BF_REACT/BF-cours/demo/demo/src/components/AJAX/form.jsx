import React, { useState, useEffect } from "react"
import axios from "axios"
import Request from "./request"

function AjaxForm() {
  const [city, setCity] = useState("")
  const [data, setData] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const API_KEY = "6a96333424ccb0635a53e6f653f1aada"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    axios
      .get(url)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    if (data) {
      console.log("Données reçues :", data)
    }
  }, [data])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cityInput">Entrez le nom d'une ville :</label>
        <input
          id="cityInput"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Envoyer</button>
      </form>
      {data && <Request data={data} />}
    </div>
  )
}

export default AjaxForm
