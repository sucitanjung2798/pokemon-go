import React from "react";
import "./FilterButton.css";

const FilterButtonPage = ({ isGenerationActive, setIsGenerationActive }) => {
  return (
    <main>
      <button
        className="border border-red-600"
        onClick={() => console.log("Halo")}
      >
        {/* <iconify-icon
          className="icon-style"
          icon="material-symbols:menu"
        ></iconify-icon> */}
        Halo
      </button>
    </main>
  );
};

export default FilterButtonPage;
