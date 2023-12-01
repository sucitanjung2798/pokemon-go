import React from "react";

const EvolutionPage = ({ isEvolutionChoose }) => {
  return (
    <section
      className={`${
        isEvolutionChoose ? "evolutionSection active" : "evolutionSection"
      }`}
    >
      <h1>Evolution Chain</h1>
    </section>
  );
};

export default EvolutionPage;
