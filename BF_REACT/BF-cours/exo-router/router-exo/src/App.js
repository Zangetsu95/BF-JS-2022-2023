import logo from './logo.svg';
import './App.css';
import NavBar from './containers/nav-bar';
import { useRoutes } from "react-router-dom"
import appRoute from "./routes/app.route"

function App() {

  const routes = useRoutes(appRoute)

  return (
    <div className="App">
      <NavBar />
      <div>
        <main>{routes}</main>
      </div>
    </div>
  );
}

export default App;
