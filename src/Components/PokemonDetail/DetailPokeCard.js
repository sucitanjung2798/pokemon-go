import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PokedexContext } from "../../Context/PokedexContext";
import Pokeball from "../../Assets/pokeball.jpg";

const DetailPokeCard = ({ name, id, types }) => {
  const { pokemonAbout } = useContext(PokedexContext);

  return (
    <section className="pokeCard">
      <section className="flex justify-between items-center pb-5 pt-8 relative">
        <Link to="/" className="backBg">
          <span className="material-icons-outlined">arrow_back</span>
        </Link>
      </section>
      <figure className="flex flex-col items-center justify-center w-full">
        <figcaption className="flex flex-col justify-between items-start w-full">
          <div className="flex justify-between items-center w-full">
            <h1 className="capitalize text-3xl font-extrabold tracking-wider">
              {name}
            </h1>
            <span className="font-bold">
              #{String(`${id}`).padStart(3, "0")}
            </span>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center">
              {types?.map((type, index) => (
                <small
                  key={index}
                  className="my-2 mx-1 rounded-full md:text-base text-sm typeName"
                >
                  {type.type.name}
                </small>
              ))}
            </div>
            <span className="font-medium">
              {
                pokemonAbout.genera?.find((gen) => gen.language.name === "en")
                  ?.genus
              }
            </span>
          </div>
        </figcaption>
        <div className="relative flex justify-center items-center overflow-hidden w-full mt-6">
          <span className="absolute top-0 md:text-7xl text-3xl opacity-75 font-bold">
            {
              pokemonAbout.genera?.find(
                (gen) => gen.language.name === "ja-Hrkt"
              )?.genus
            }
          </span>
          <img
            className="relative z-10 w-3/4 -bottom-4"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            alt={name}
          />
          <img className="pokemonBg rotar" src={Pokeball} alt="Pokeball" />
        </div>
      </figure>
    </section>
  );
};

export default DetailPokeCard;
