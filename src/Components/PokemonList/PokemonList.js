import { useContext } from "react";
import { PokedexContext } from "../../Context/PokedexContext";
import PokemonCard from "./PokemonCard";
import Loader from "../UI/Loader/Loader";

const PokemonList = () => {
  const { isLoading, lastElementRef, filteredResult } =
    useContext(PokedexContext);

  const renderPokemon = () =>
    filteredResult.map((pokemon, index) => {
      return index === filteredResult.length - 1 ? (
        <div key={pokemon.id} ref={lastElementRef}>
          <PokemonCard pokemon={pokemon} />
        </div>
      ) : (
        <div key={pokemon.id}>
          <PokemonCard pokemon={pokemon} />
        </div>
      );
    });

  return (
    <div>
      <section className="grid grid-cols-2 justify-items-center gap-x-2 md:gap-x-4 md:gap-y-5 gap-y-2 md:w-11/12 w-full mx-auto pb-10 z-10">
        {renderPokemon()}
      </section>
      {isLoading && <Loader />}
    </div>
  );
};

export default PokemonList;
