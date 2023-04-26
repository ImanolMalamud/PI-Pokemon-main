import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./scenes/pages/Home/Home";
import Landing from "./scenes/pages/Landing/Landing";
import CreatePokemon from "./scenes/pages/CreatePokemon/CreatePokemon";
import Detail from "./scenes/pages/Detail/Detail";
import NavBar from "./scenes/global/NavBar/NavBar";
import Footer from "./scenes/global/Footer/Footer";
import Layout from "./scenes/global/Layout/Layout";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route element={<Layout />}>
          <Route exact path="/home" element={<Home />} />
          <Route path="/home/:id" element={<Detail />} />
          <Route path="/createpoke" element={<CreatePokemon />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
