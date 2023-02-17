import { useEffect, useState } from "react"

const Horloge = () => {
  const [showTime, setShowTime] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date()
      setShowTime(
        time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
      )
    }, 200)
    return () => clearInterval(interval)
  }, []) // le crochet []sert a l'optimisation

  return (
    <>
      <div>
        <p>Heure : {showTime}</p>
      </div>
    </>
  )
}

export default Horloge
