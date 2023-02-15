
import './App.css';
import { useState } from 'react';
import Welcome from './components/welcome/welcome';
import Exo1 from './components/exercice-1/exo1';
import PersonTable from './components/person-table/person-table';
import ProductTable from './components/exercice-2/exerice2';
import Compteur from './components/compteur/compteur';
import ExemplpeInput from './components/calculatrice/calculatrice';
import Calculatrice from './components/calculatrice/calculatrice';
import AddTaskForm from './components/AddTaskForm/addTaskForm';
import ListTaskForm from './components/listTask/listTask';
import styles from '../src/components/AddTaskForm/add-task.module.css'


const people = [
  { id: 1, firstname: 'zaza', lastname: "vanderquack", age: 15 },
  { id: 2, firstname: 'bobo', lastname: "picsou", age: 15 },
  { id: 3, firstname: 'pepito', lastname: "duck", age: 15 }
]

const product = [
  { id: 1, name: 'apple', price: 2, promo: true },
  { id: 2, name: 'milk', price: 5, promo: false },
  { id: 3, name: 'cigarette', price: 8, promo: true },
  { id: 4, name: 'ananas', price: 4, promo: false }
]



function App() {
  const [taskList, setTaskList] = useState([]);

  const addTask = (task) => {
    setTaskList([...taskList, task]);
  };

  return (
    <div className="App">
      {/* <Welcome
        firstname="amine"
        lastname={true}
      /> */}
      {/* <Exo1
        firstname="amine"
      /> */}

      {/* <h2>Collections</h2>
      <PersonTable data={people} /> */}

      {/* <h2>Product en promo ?</h2>
      <ProductTable data={product} />
      <h2>Compteur en useState()</h2>
      <Compteur data={0} />

      <h2>Un formulaire</h2>
      <Calculatrice /> */}


      <h2 className={styles.container}>TODOLIST</h2>
      <AddTaskForm onAddTask={addTask} />
      <h3 className={styles.container}>Liste des tâches</h3>
      <ListTaskForm taskList={taskList} />


    </div>

  );
}

export default App;
