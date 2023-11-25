import { useContext } from "react";
import { PokedexContext } from "../../Context/PokedexContext";
import PokemonCard from "./PokemonCard";
import Loader from "../UI/Loader/Loader";

const PokemonList = () => {
  const { loading, allPokemons } = useContext(PokedexContext);

  if (loading) {
    return <Loader />;
  }

  console.log(allPokemons);

  return (
    <section className="grid grid-cols-2 justify-items-center gap-x-2 md:gap-x-4 md:gap-y-5 gap-y-2 md:w-11/12 w-full mx-auto pb-10 z-10">
      {allPokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          types={pokemon.types}
          id={pokemon.id}
        />
      ))}
    </section>
  );
};

export default PokemonList;
