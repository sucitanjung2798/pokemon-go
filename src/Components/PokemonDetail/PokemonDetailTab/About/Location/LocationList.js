import React, { useContext } from "react";
import { PokedexContext } from "../../../../../Context/PokedexContext";
import PokeBallIcon from "../../../../../Assets/pokeball.png";

const LocationList = ({ locationActive, setLocationActive }) => {
  const { pokeLocation } = useContext(PokedexContext);
  return (
    <section
      className={`${
        locationActive ? "locationContainer active" : "locationContainer active"
      }`}
    >
      <article>
        <div className="flex items-center w-full justify-between pb-2">
          <p className="font-bold">Location List:</p>
          <button
            className="flex justify-end items-center"
            onClick={() => setLocationActive(!locationActive)}
          >
            <span className="material-icons-outlined">close</span>
          </button>
        </div>
        <ul>
          {pokeLocation.length > 0
            ? pokeLocation.map((location, index) => (
                <li key={index} className="flex items-center py-1.5 capitalize">
                  <img
                    className="w-7 h-7 mr-1"
                    src={PokeBallIcon}
                    alt="Pokeball Icon"
                  />
                  {location.location_area.name}
                </li>
              ))
            : "Location unknown 😵"}
        </ul>
      </article>
    </section>
  );
};

export default LocationList;
