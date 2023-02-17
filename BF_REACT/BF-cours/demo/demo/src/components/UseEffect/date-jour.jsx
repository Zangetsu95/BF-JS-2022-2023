import { useState } from "react"

const DateDujour = () => {
  //   const [count, setCount] = useState(0)
  const current = new Date()
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`

  return (
    <>
      <div>
        {/* <button onClick={() => setCount((c) => c + 1)}>
          Ajouter + : {count}
        </button> */}
        <p>Date : {date}</p>
        <p>Resultat attendu : 17 février 2023</p>
      </div>
    </>
  )
}

export default DateDujour
