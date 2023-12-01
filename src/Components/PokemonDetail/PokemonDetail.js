import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokedexContext } from "../../Context/PokedexContext";
import {
  Colors,
  getDetailPokemon,
  getPokemonSpecies,
} from "../../Helpers/PokeApi";
import Dots from "../../Assets/dotted.png";
import DetailPokeCard from "./DetailPokeCard";
import Loader from "../UI/Loader/Loader";
import PokemonDetailTab from "./PokemonDetailTab/PokemonDetailTab";
import LocationList from "./PokemonDetailTab/About/Location/LocationList";

const PokemonDetail = () => {
  const { name } = useParams();
  const [locationActive, setLocationActive] = useState(false);

  const {
    detailPokemon,
    setDetailPokemon,
    setIsLoading,
    setPokemonAbout,
    isLoading,
  } = useContext(PokedexContext);

  useEffect(() => {
    const fetchDetailPokemon = async () => {
      try {
        setIsLoading(true);
        const pokemonDetailData = await getDetailPokemon(name);
        const pokemonAboutData = await getPokemonSpecies(
          pokemonDetailData.species.url
        );
        setDetailPokemon(pokemonDetailData);
        setPokemonAbout(pokemonAboutData);
      } catch (err) {
        console.error(err);
        setDetailPokemon([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetailPokemon();
  }, [name]);

  const main_types = Object.keys(Colors);
  const poke_types = detailPokemon.types?.map((type) => type.type.name);
  const type = main_types.find((type) => poke_types?.indexOf(type) > -1);
  const color = Colors[type];

  const styleBg = {
    backgroundColor: `${color}`,
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="detailsContainer" style={styleBg}>
      <img className="dotsBg" src={Dots} alt="Dots background" />
      <DetailPokeCard
        name={name}
        id={detailPokemon.id}
        types={detailPokemon.types}
      />
      <PokemonDetailTab
        types={detailPokemon.types}
        color={color}
        locationActive={locationActive}
        setLocationActive={setLocationActive}
      />
      {locationActive && (
        <LocationList
          locationActive={locationActive}
          setLocationActive={setLocationActive}
        />
      )}
    </main>
  );
};

export default PokemonDetail;
