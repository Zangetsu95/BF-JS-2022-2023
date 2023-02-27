import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import HomePage from "./pages/home/home.page"
import { useRoutes } from "react-router-dom"
import appRoute from "./routes/app.route"

function App() {
  const routes = useRoutes(appRoute)

  return (
    <div className="App">
      <div>
        <nav>navbar</nav>
        <main>{routes}</main>
      </div>
    </div>
  )
}

export default App
