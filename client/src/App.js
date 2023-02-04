import "./App.css"
import { Route } from "react-router-dom"
import CreatePokemon from "./components/CreatePokemon/CreatePokemon"
import NavBar from "./components/NavBar/NavBar"
import Detail from "./components/Detail/Detail"
import Landing from "./components/Landing/Landing"
import Home from "./components/Home/Home"
import Paginated from "./components/Paginated/Paginated"

function App() {
  return (
    <div className="App">
      <Route exact path={"/"} component={Landing} />

      <Route exact path={"/home"} component={Home} />

      <Route exact path={"/createpoke"} component={CreatePokemon} />

      <Route exact path={"/home/:id"} component={Detail} />
    </div>
  )
}

export default App
