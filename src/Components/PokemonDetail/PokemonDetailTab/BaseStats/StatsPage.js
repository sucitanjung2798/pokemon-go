import React from "react";
import BarPage from "./BarStats/BarPage";

const StatsPage = ({ isStatsChoose, color }) => {
  return (
    <section
      className={`${isStatsChoose} ? "statsSection active" : "statsSection"`}
    >
      <BarPage color={color} />
    </section>
  );
};

export default StatsPage;
