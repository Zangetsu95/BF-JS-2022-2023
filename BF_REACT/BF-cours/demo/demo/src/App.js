
import './App.css';
import Welcome from './components/welcome/welcome';
import Exo1 from './components/exercice-1/exo1';
import PersonTable from './components/person-table/person-table';
import ProductTable from './components/exercice-2/exerice2';


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
  return (
    <div className="App">
      {/* <Welcome
        firstname="amine"
        lastname={true}
      /> */}
      <Exo1
        firstname="amine"
      />

      <h2>Collections</h2>
      <PersonTable data={people} />

      <h2>Product en promo ?</h2>
      <ProductTable data={product} />
    </div>

  );
}

export default App;
