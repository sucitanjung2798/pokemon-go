import React from "react";
import BreedingPage from "./Breeding/BreedingPage";
import LocationPage from "./Location/LocationPage";
import TrainingPage from "./Training/TrainingPage";

const AboutPage = ({
  color,
  isAboutChoose,
  locationActive,
  setLocationActive,
}) => {
  return (
    <section
      className={`${isAboutChoose ? "aboutSection active" : "aboutSection"}`}
    >
      <BreedingPage />
      <LocationPage
        color={color}
        locationActive={locationActive}
        setLocationActive={setLocationActive}
      />
      <TrainingPage />
    </section>
  );
};

export default AboutPage;
