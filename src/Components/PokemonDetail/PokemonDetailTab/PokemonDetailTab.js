import React, { useContext, useState } from "react";
import { PokedexContext } from "../../../Context/PokedexContext";
import { getPokemonData } from "../../../Helpers/PokeApi";
import AboutPage from "./About/AboutPage";
import StatsPage from "./BaseStats/StatsPage";
import MovePage from "./Move/MovePage";
import EvolutionPage from "./Evolution/EvolutionPage";

const PokemonDetailTab = ({
  color,
  types,
  locationActive,
  setLocationActive,
}) => {
  const { pokemonAbout, setEvolChain } = useContext(PokedexContext);

  const [isAboutChoose, setIsAboutChoose] = useState(true);
  const [isStatsChoose, setIsStatsChoose] = useState(false);
  const [isEvolutionChoose, setIsEvolutionChoose] = useState(false);
  const [isMoveChoose, setIsMoveChoose] = useState(false);

  const handleClickEvolution = async () => {
    try {
      const evolChain = await getPokemonData(pokemonAbout.evolution_chain.url);

      setEvolChain(evolChain);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="pokeDetails">
      <section className="flex items-center justify-between border-b mb-4 text-sm w-full">
        <button
          className={`${isAboutChoose ? "detailsBtn active" : "detailsBtn"}`}
          onClick={() => {
            setIsAboutChoose(!isAboutChoose);
            setIsEvolutionChoose(false);
            setIsMoveChoose(false);
            setIsStatsChoose(false);
          }}
        >
          About
        </button>
        <button
          className={`${isStatsChoose ? "detailsBtn active" : "detailsBtn"}`}
          onClick={() => {
            setIsAboutChoose(false);
            setIsEvolutionChoose(false);
            setIsMoveChoose(false);
            setIsStatsChoose(!isStatsChoose);
          }}
        >
          Base Stats
        </button>
        <button
          className={`${
            isEvolutionChoose ? "detailsBtn active" : "detailsBtn"
          }`}
          onClick={() => {
            setIsAboutChoose(false);
            setIsEvolutionChoose(!isEvolutionChoose);
            setIsMoveChoose(false);
            setIsStatsChoose(false);
          }}
        >
          Evolution
        </button>
        <button
          className={`${isMoveChoose ? "detailsBtn active" : "detailsBtn"}`}
          onClick={() => {
            setIsAboutChoose(false);
            setIsEvolutionChoose(false);
            setIsMoveChoose(!isMoveChoose);
            setIsStatsChoose(false);
          }}
        >
          Moves
        </button>
      </section>

      {isAboutChoose && (
        <AboutPage
          isAboutChoose={isAboutChoose}
          color={color}
          locationActive={locationActive}
          setLocationActive={setLocationActive}
        />
      )}

      {isStatsChoose && (
        <StatsPage isStatsChoose={isStatsChoose} color={color} />
      )}

      {isMoveChoose && <MovePage isMoveChoose={isMoveChoose} />}

      {isEvolutionChoose && (
        <EvolutionPage isEvolutionChoose={isEvolutionChoose} />
      )}
    </section>
  );
};

export default PokemonDetailTab;
