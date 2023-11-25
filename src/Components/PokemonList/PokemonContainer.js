import React from "react";
import BackgroundBall from "../../Assets/pokeball.jpg";
import PokedexImage from "../../Assets/pokeapi.png";
import SearchBar from "./SearchBar";
import PokemonList from "./PokemonList";

const PokemonContainer = () => {
  return (
    <section className="relative pokedex" style={{ paddingTop: "55px" }}>
      <img className="pokeBg" src={BackgroundBall} alt="Background Ball" />
      <div className="flex justify-center items-center">
        <img src={PokedexImage} alt="PokedexImage" />
      </div>

      <SearchBar />
      <div style={{ padding: "4px 38px 0" }}>
        <PokemonList />
      </div>
    </section>
  );
};

export default PokemonContainer;
