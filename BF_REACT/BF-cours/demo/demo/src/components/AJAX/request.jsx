import axios from "axios"
import { useEffect, useState } from "react"

const Request = ({ data }) => {
  // const [weatherData, setWeatherData] = useState("")
  // const API_KEY = "6a96333424ccb0635a53e6f653f1aada"
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

  // console.log(url)

  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then((response) => {
  //       console.log(response)
  //       setWeatherData(response.data)
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching weather data", error)
  //     })
  // }, [city])

  const [saveData, setSaveData] = useState([])

  const handleSave = () => {
    const dataSave = {
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
    }
    setSaveData([...saveData, dataSave])
    console.log(dataSave)
  }

  return (
    <div>
      <div>
        <h3>Température pour {data.name}</h3>
        <p>Temperature: {data.main.temp}° Celcius</p>
        <p>Description: {data.weather[0].description}</p>
        <button onClick={handleSave}>Sauvegarder</button>
      </div>
      <h2>Saved Data</h2>
      <ul>
        {saveData.map((data, index) => (
          <li key={index}>
            {data.city} - {data.temperature}° - {data.description}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Request
