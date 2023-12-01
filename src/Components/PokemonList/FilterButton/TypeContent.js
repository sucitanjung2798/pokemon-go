import React from "react";
import GenerationI from "../../../Assets/Generations/Generation_I.jpg";
import GenerationII from "../../../Assets/Generations/Generation_II.jpg";
import GenerationIII from "../../../Assets/Generations/Generation_III.jpg";
import GenerationIV from "../../../Assets/Generations/Generation_IV.jpg";
import GenerationV from "../../../Assets/Generations/Generation_V.jpg";
import GenerationVI from "../../../Assets/Generations/Generation_VI.png";
import GenerationVII from "../../../Assets/Generations/Generation_VII.jpg";
import GenerationVIII from "../../../Assets/Generations/Generation_VIII.jpg";
import GenerationCard from "./GenerationCard";

const TypeContent = ({ isGenerationActive, setIsGenerationActive }) => {
  const regions = [
    {
      name: "Kanto",
      generation: "I",
      limit: 151,
      offset: 0,
      img: `${GenerationI}`,
    },
    {
      name: "Johto",
      generation: "II",
      limit: 100,
      offset: 151,
      img: `${GenerationII}`,
    },
    {
      name: "Hoenn",
      generation: "III",
      limit: 135,
      offset: 251,
      img: `${GenerationIII}`,
    },
    {
      name: "Sinnoh",
      limit: 108,
      generation: "VI",
      offset: 386,
      img: `${GenerationIV}`,
    },
    {
      name: "Unova",
      generation: "V",
      limit: 155,
      offset: 494,
      img: `${GenerationV}`,
    },
    {
      name: "Kalos",
      limit: 72,
      generation: "VI",
      offset: 649,
      img: `${GenerationVI}`,
    },
    {
      name: "Alola",
      limit: 88,
      generation: "VII",
      offset: 721,
      img: `${GenerationVII}`,
    },
    {
      name: "Galar",
      limit: 89,
      generation: "VIII",
      offset: 809,
      img: `${GenerationVIII}`,
    },
  ];

  return (
    <section
      className={`${
        isGenerationActive
          ? "generationContainer active"
          : "generationContainer"
      }`}
    >
      <article className="generationSection">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
          className="px-6"
        >
          <h1 className="text-lg font-extrabold pb-4">Generation</h1>
          <button
            className="flex justify-end items-center"
            onClick={() => setIsGenerationActive(!isGenerationActive)}
          >
            <span className="material-icons-outlined text-md">close</span>
          </button>
        </div>
        <article className="grid xl:grid-cols-5 md:grid-cols-4 grid-cols-2 justify-items-center gap-x-3 md:gap-x-4 md:gap-y-5 gap-y-3 md:w-11/12 w-full mx-auto pb-4 overflow-y-scroll h-full">
          {regions.map((gen, index) => (
            <GenerationCard
              key={index}
              generation={gen.generation}
              img={gen.img}
              limit={gen.limit}
              offset={gen.offset}
            />
          ))}
        </article>
      </article>
    </section>
  );
};

export default TypeContent;
