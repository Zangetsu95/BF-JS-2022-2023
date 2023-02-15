import { useState } from "react"
import styles from "../AddTaskForm/add-task.module.css"

const ListTaskForm = ({ taskList, setTaskList }) => {
  const removeElement = (index) => {
    setTaskList((prevList) => prevList.filter((_, i) => i !== index))
  }

  return (
    <div className={styles.container}>
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>
            <h4>{task.name}</h4>
            <p>{task.description}</p>
            <p className={task.priority === "Urgent" ? styles.urgent : ""}>
              {task.priority}
            </p>
            <button>Terminer</button>
            <button onClick={() => removeElement(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListTaskForm
