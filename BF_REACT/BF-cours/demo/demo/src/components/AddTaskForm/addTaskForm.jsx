import { useState } from "react"
import styles from "./add-task.module.css"
import ListTaskForm from "../listTask/listTask"

function AddTaskForm({ onAddTask }) {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState("normal")
  const [taskList, setTaskList] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    const task = { name, description, priority }
    onAddTask(task)
    setName("")
    setDescription("")
    setPriority("normal")
    setTaskList([...taskList, task]) // add the new task to the taskList
  }

  return (
    <div className={styles.container}>
      <form className={styles.container} onSubmit={handleSubmit}>
        <label>Nom</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Priorité</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="normal">normal</option>
          <option value="en-cours">en-cours</option>
          <option value="Urgent">Urgent</option>
          <option value="Termine">Termine</option>
        </select>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  )
}

export default AddTaskForm
