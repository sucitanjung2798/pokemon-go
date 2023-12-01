import React, { useState } from "react";
import BackgroundBall from "../../Assets/pokeball.jpg";
import PokedexImage from "../../Assets/pokeapi.png";
import SearchBar from "./SearchBar";
import PokemonList from "./PokemonList";
import FilterButtonPage from "./FilterButton/FilterButtonPage";
import TypeContent from "./FilterButton/TypeContent";

const PokemonContainer = () => {
  const [isGenerationActive, setIsGenerationActive] = useState(false);

  console.log(!isGenerationActive);

  return (
    <section className="pokedex relative" style={{ paddingTop: "55px" }}>
      <img className="pokeBg" src={BackgroundBall} alt="Background Ball" />
      <div className="flex justify-between items-center px-9">
        <img src={PokedexImage} alt="PokedexImage" className="pokedexImage" />
        {/* <FilterButtonPage
          isGenerationActive={isGenerationActive}
          setIsGenerationActive={setIsGenerationActive}
        /> */}
        <div onClick={() => console.log("halo")}>Halo</div>
      </div>

      <SearchBar />

      <div style={{ padding: "4px 38px 0" }}>
        <PokemonList />
      </div>
      {/* {!isGenerationActive && (
        <TypeContent
          isGenerationActive={isGenerationActive}
          setIsGenerationActive={setIsGenerationActive}
        />
      )} */}
    </section>
  );
};

export default PokemonContainer;
