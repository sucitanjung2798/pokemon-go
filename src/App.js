import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Components/PokemonList/FilterButton/FilterButton.css";
import "./Components/PokemonList/Pokedex.css";
import "./Components/PokemonDetail/PokemonDetail.css";
import PokemonContainer from "./Components/PokemonList/PokemonContainer";
import PokemonDetail from "./Components/PokemonDetail/PokemonDetail";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PokemonContainer />} />
        <Route path="pokemon">
          <Route path=":name" element={<PokemonDetail />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
