import axios from "axios"
import { useEffect, useState } from "react"

const SearchBar = () => {
  const [inputText, setInputText] = useState("")
  const [errorText, setErrorText] = useState(false)
  const [videos, setVideos] = useState([])
  const API_KEY = process.env.REACT_APP_API_KEY

  const handleSubmit = (e) => {
    e.preventDefault()

    if (inputText.trim() === "") {
      setErrorText(true)
    } else {
      setErrorText(false)
      console.log(inputText)
      setInputText("")
    }
  }

  const handleChange = (e) => {
    setInputText(e.target.value)
    setErrorText(false)
  }

  useEffect(() => {
    const fetchVideos = () => {
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            part: "snippet",
            maxResults: 10,
            q: inputText,
            type: "video",
            key: API_KEY,
          },
        })
        .then((response) => {
          setVideos(response.data.items)
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    fetchVideos()
  }, [inputText])

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputText}
            onChange={handleChange}
            placeholder="Chercher une vidéo"
          />
          <button type="submit">Envoyer</button>
        </form>
        {errorText && <p>Le champ de saisie ne peut pas être vide.</p>}
      </div>
      <div>
        <h2>resultat de votre recherche</h2>
        <ul>
          {videos.map((video) => (
            <li key={video.id.videoId}>
              <a
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                />
                <h2>{video.snippet.title}</h2>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default SearchBar
