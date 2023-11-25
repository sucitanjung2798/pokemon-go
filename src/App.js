import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Components/PokemonList/Pokedex.css";
import PokemonContainer from "./Components/PokemonList/PokemonContainer";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PokemonContainer />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
