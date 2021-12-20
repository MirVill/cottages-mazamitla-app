import MazamitlaActivities from "../Components/Mazamitla/MazamitlaActivities";
import MazamitlaDescription from "../Components/Mazamitla/MazamitlaDescription";
import Activities from "../Components/Mazamitla/Data/ActivitiesPhotos";
import atractions from "../Components/Mazamitla/Data/AtractionPhotos";
import Location from "../Components/Location";
import Button from "../Utils/Button";
import { NavLink } from "react-router-dom";

const Mazamitla = () => {
  return (
    <div className="mazamitla-page">
      <MazamitlaDescription />
      <MazamitlaActivities activitiesPhotos={Activities} title="Actividades" />
      <MazamitlaActivities activitiesPhotos={atractions} title="Atracciones" />
      <Location
        title="Mazamitla, Jalisco"
        url="https://www.google.com/maps/place/Mazamitla,+Jal./@19.9192071,-103.0388436,14z/data=!3m1!4b1!4m5!3m4!1s0x842f08c29d6bb1fb:0xb0e0d639aa12c005!8m2!3d19.9165757!4d-103.0212924"
      />
      <NavLink to="/las-catarinas">
        <Button text="¡Hospedate con nosotros!" />
      </NavLink>
    </div>
  );
};

export default Mazamitla;
