import { useState } from "react"
import styles from "../AddTaskForm/add-task.module.css"

const ListTaskForm = ({ taskList, setTaskList }) => {
  const [deleteClicked, setDeleteClicked] = useState(false)
  const rainbow = []

  const removeElement = (index) => {
    /* Filtering the taskList array and removing the task that has the same index as the one that was
clicked. */
    setTaskList((prevList) => prevList.filter((_, i) => i !== index))
  }

  const completeTask = (index) => {
    setDeleteClicked(true)
    setTaskList((prevList) =>
      prevList.map((task, i) =>
        i === index ? { ...task, completed: true } : task
      )
    )
  }

  return (
    <div className={styles.container}>
      <ul>
        {taskList.map((task, index) => (
          <li
            key={index}
            className={`${styles.completeButton} ${
              task.completed ? styles.completed : ""
            }`}
          >
            <h4>{task.name}</h4>
            <p>{task.description}</p>
            <p className={task.priority === "Urgent" ? styles.urgent : ""}>
              {task.priority}
            </p>
            <button
              disabled={task.completed}
              onClick={() => completeTask(index)}
            >
              Terminer
            </button>
            <button
              className={styles.deleteButton}
              onClick={() => removeElement(index)}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListTaskForm
