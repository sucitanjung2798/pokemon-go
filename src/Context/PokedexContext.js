import { createContext, useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";

export const PokedexContext = createContext();

export const PokedexProvider = ({ children }) => {
  const [nextUrl, setNextUrl] = useState(null);
  const [allPokemon, setAllPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [detailPokemon, setDetailPokemon] = useState([]);
  const [pokemonAbout, setPokemonAbout] = useState([]);
  const [evolChain, setEvolChain] = useState([]);
  const [pokeLocation, setPokeLocation] = useState([]);

  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && nextUrl) {
          getAllPokemon(nextUrl);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, nextUrl, allPokemon]
  );

  const fetchPokemonData = async (url) => {
    const response = await axios.get(url);
    const { name, id, types } = response.data;
    return { id, name, type: types };
  };

  const getAllPokemon = useCallback(
    async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        const results = response.data.results;
        const { next } = response.data;
        if (next) setNextUrl(next);
        const detailRequests = results.map(
          async (r) => await fetchPokemonData(r.url)
        );

        await Promise.all(detailRequests).then((detailResults) => {
          setAllPokemon([...allPokemon, ...detailResults]);
        });
        setDetailPokemon([]);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    },
    [nextUrl, allPokemon]
  );

  const filterData = (inputKeyword) => {
    return allPokemon.filter((item) =>
      item.name.toLowerCase().includes(inputKeyword.toLowerCase())
    );
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredResult = filterData(searchValue);

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    getAllPokemon(url);
  }, []);

  const data = {
    allPokemon,
    lastElementRef,
    isLoading,
    searchValue,
    setSearchValue,
    filteredResult,
    handleInputChange,
    detailPokemon,
    setDetailPokemon,
    setIsLoading,
    pokemonAbout,
    setPokemonAbout,
    evolChain,
    setEvolChain,
    pokeLocation,
    setPokeLocation,
    setAllPokemon,
  };

  return (
    <PokedexContext.Provider value={data}>{children}</PokedexContext.Provider>
  );
};
