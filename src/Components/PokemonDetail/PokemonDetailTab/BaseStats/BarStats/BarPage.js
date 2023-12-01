import React, { useContext } from "react";
import { PokedexContext } from "../../../../../Context/PokedexContext";
import ProgressBar from "./ProgressBar";
import "./BarStats.css";

const BarPage = ({ color }) => {
  const { detailPokemon } = useContext(PokedexContext);

  return (
    <section className="mb-4">
      {detailPokemon.stats.map((stat, index) => (
        <ProgressBar
          key={index}
          percentage={stat.base_stat}
          name={stat.stat.name}
          color={color}
        />
      ))}
    </section>
  );
};

export default BarPage;
