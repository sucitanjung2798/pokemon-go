import React from "react";
import { useNavigate } from "react-router-dom";
import { Colors } from "../../Helpers/PokeApi";
import PokeBall from "../../Assets/pokeball.jpg";

const PokemonCard = ({ pokemon }) => {
  const { id, name, type } = pokemon;
  const navigate = useNavigate();

  const main_types = Object.keys(Colors);
  const poke_types = type.map((type) => type.type.name);
  const types = main_types.find((type) => poke_types.indexOf(type) > -1);
  const color = Colors[types];

  const styleBg = {
    backgroundColor: `${color}`,
  };

  const handleClick = async () => {
    navigate(`pokemon/${name}`);
  };

  return (
    <section
      className="pokemonCard cursor-pointer"
      style={styleBg}
      onClick={handleClick}
    >
      <h2 className="capitalize font-bold tracking-tighter md:text-lg text-sm text-white">
        {name}
      </h2>
      <h3>#{String(`${id}`).padStart(3, "0")}</h3>
      <figure className="flex items-center justify-center">
        <figcaption className="flex flex-col  justify-center items-center w-1/2">
          {type.map((type, index) => (
            <small
              key={index}
              className="my-1 rounded-full md:text-base text-xs typeName"
            >
              {type.type.name}
            </small>
          ))}
        </figcaption>
        <div className="w-1/2 relative">
          <img className="pokeBall" src={PokeBall} alt="Pokeball" />
          <img
            className="pokemonImg"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            alt={name}
          />
        </div>
      </figure>
    </section>
  );
};

export default PokemonCard;
