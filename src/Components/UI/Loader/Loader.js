import PokeBall from "../../../Assets/pokeball.png";
import "./Loader.css";

const Loader = () => {
  return (
    <figure className="loader">
      <img src={PokeBall} alt="Loading..." height="100" width="100" />
    </figure>
  );
};

export default Loader;
