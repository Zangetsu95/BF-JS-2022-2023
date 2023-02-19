import axios from "axios"
import { useEffect, useState } from "react"

const Request = ({ city }) => {
  const [weatherData, setWeatherData] = useState("")
  const API_KEY = "6a96333424ccb0635a53e6f653f1aada"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setWeatherData(response.data)
      })
      .catch((error) => {
        console.error("Error fetching weather data", error)
      })
  }, [url])

  return (
    <div>
      {weatherData !== "" && (
        <div>
          <h3>Température pour {weatherData.name}</h3>
          <p>Temperature: {weatherData.main.temp} Celcius</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  )
}

export default Request
