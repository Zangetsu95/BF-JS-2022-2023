import axios from "axios"
import { useEffect, useState } from "react"

const Request = () => {
  const [city, setCity] = useState()

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric"
      )
      .then((response) => {
        console.log(response)
      })
  })
}
