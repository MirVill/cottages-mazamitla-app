import { NavLink } from "react-router-dom";
import img from "../../Assets/Images/Mazamitla-1.jpg";
import Button from "../../Utils/Button";
const MazamitlaResume = () => {
  return (
    <div className="mazamitla-resume__container">
      <img src={img} alt="Mazamitla" className="mazamitla-resume__img" />
      <div>
        <NavLink to="/conoce-mazamitla">
          <Button text="Sobre Mazamitla" />
        </NavLink>
      </div>
    </div>
  );
};
export default MazamitlaResume;
