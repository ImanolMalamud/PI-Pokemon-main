import "./App.css"
import { Route } from "react-router-dom"
import Home from "./scenes/pages/Home/Home"
import Landing from "./scenes/pages/Landing/Landing"
import CreatePokemon from "./scenes/pages/CreatePokemon/CreatePokemon"
import Detail from "./scenes/pages/Detail/Detail"

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
