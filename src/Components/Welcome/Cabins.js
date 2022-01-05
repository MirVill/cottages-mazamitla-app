import { NavLink } from "react-router-dom";
import img from "../../Assets/Images/cottage-photos/cabaña-frente.jpg";
import {
  faMapMarkedAlt,
  faCar,
  faHouseUser,
  faDungeon,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../Utils/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DescriptionCard from "./DescriptionCard";
const Cabins = () => {
  const location = (
    <FontAwesomeIcon icon={faMapMarkedAlt} size="sm" className="card-icon" />
  );
  const car = <FontAwesomeIcon icon={faCar} size="sm" className="card-icon" />;
  const house = (
    <FontAwesomeIcon icon={faHouseUser} size="sm" className="card-icon" />
  );
  const dungeon = (
    <FontAwesomeIcon icon={faDungeon} size="sm" className="card-icon" />
  );
  return (
    <div className="cabins-container">
      <img src={img} alt="cabaña" className="cabins-img" />
      <div className="cabins-description__container">
        <h1>Instalaciones</h1>
        <div className="cabins-cards__container">
          <DescriptionCard
            icon={location}
            title="Excelente ubicación"
            description="A 15 minutos del centro caminando."
          />
          <DescriptionCard
            icon={car}
            title="Estacionamiento"
            description="Estacionamiento con capacidad de 2 autos."
          />
          <DescriptionCard
            icon={house}
            title="Alojamiento entero"
            description="Unicamente para ti y tus acompañantes."
          />
          <DescriptionCard
            icon={dungeon}
            title="En fraccionamiento"
            description="Te ofecemos mayor seguridad y ateción."
          />
        </div>
        <NavLink to="/las-catarinas">
          <Button text="Ver más" />
        </NavLink>
      </div>
    </div>
  );
};
export default Cabins;
