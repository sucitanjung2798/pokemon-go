import React from "react";
import "./Location.css";

const LocationPage = ({ color, locationActive, setLocationActive }) => {
  const styleLocation = {
    backgroundColor: `${color}`,
  };

  return (
    <article className="my-2 text-base">
      <h3 className="font-bold pt-4">Location</h3>
      <button
        onClick={() => setLocationActive(!locationActive)}
        className="w-full md:h-36 h-24 rounded-xl my-3 cursor-pointer hover:blur-sm"
        style={styleLocation}
      ></button>
    </article>
  );
};

export default LocationPage;
