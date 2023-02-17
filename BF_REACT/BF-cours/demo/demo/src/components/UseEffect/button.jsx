import { useState, useEffect } from "react"
import DateDujour from "./date-jour"
import Horloge from "./horloge"

const Display = () => {
  const [displayEffect, setDisplayEffect] = useState(true)

  return (
    <div>
      <button onClick={() => setDisplayEffect((d) => !d)}>Change</button>
      {(displayEffect && <Horloge />) || <DateDujour />}
    </div>
  )
}

export default Display
