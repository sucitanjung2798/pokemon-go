import { createContext, useEffect, useState } from "react";
import { getPokemons, getPokemonData } from "../Helpers/PokeApi";

export const PokedexContext = createContext();

export const PokedexProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [allPokemons, setAllPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const getAllPokemons = async () => {
      setLoading(true);

      try {
        const data = await getPokemons(20, 0);
        const promises = data.results.map(async (pokemon) => {
          return await getPokemonData(pokemon.url);
        });
        const results = await Promise.all(promises);

        // setAllPokemons((prevList) => [...prevList, ...newPokemonList]);
        setAllPokemons(results);

        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    getAllPokemons();
  }, []);

  const data = {
    loading,
    setLoading,
    allPokemons,
    setAllPokemons,
  };

  return (
    <PokedexContext.Provider value={data}>{children}</PokedexContext.Provider>
  );
};
