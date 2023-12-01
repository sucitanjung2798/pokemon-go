import React from "react";

const MovePage = ({ isMoveChoose }) => {
  return (
    <section
      className={`${isMoveChoose ? "movesSection active" : "movesSection"}`}
    >
      <h2>Moves</h2>
    </section>
  );
};

export default MovePage;
