import { useCallback } from "react"
import { useArray } from "../../hooks/array.hook"

const HookPage = () => {
  const [tab, addInTab] = useArray("amine", "pepito")

  const handleAddElem = useCallback(() => {
    addInTab("hello")
  })

  return (
    <>
      <h1>Demo Hook</h1>

      <button onClick={handleAddElem}>Ajouter</button>
      <ul>
        {tab.map((elem) => (
          <li key={elem.id}>{elem.data}</li>
        ))}
      </ul>
    </>
  )
}

export default HookPage
