import { NavLink } from "react-router-dom";
import img from "../../Assets/Images/cottage-photos/cabaña-frente.jpg";
import { faMapMarkedAlt, faCar, faHouseUser, faDungeon } from "@fortawesome/free-solid-svg-icons";
import Button from "../../Utils/Button";
import Card from "../Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Cabins = () => {
  const location = <FontAwesomeIcon icon={faMapMarkedAlt} size="sm" className="card-icon"/>
  const car = <FontAwesomeIcon icon={faCar} size="sm" className="card-icon"/>
  const house = <FontAwesomeIcon icon={faHouseUser} size="sm" className="card-icon"/>
  const dungeon = <FontAwesomeIcon icon={faDungeon} size="sm" className="card-icon"/>
  return (
    <div className="cabins-container">
      <img src={img} alt="cabaña" className="cabins-img" />
      <div className="cabins-description__container">
        <h1>Instalaciones</h1>
        <div className="cabins-cards__container">
          <Card>
            <h2>{location} Excelente ubicación</h2>
            <p>A 15 minutos del centro caminando.</p>
          </Card>
          <Card>
            <h2>{car} Estacionamiento</h2>
            <p>
              Estacionamiento con capacidad de 2 autos.
            </p>
          </Card>
          <Card>
            <h2>{house} Alojamiento entero</h2>
            <p>
              Unicamente para ti y tus acompañantes. 
            </p>
          </Card>
          <Card>
            <h2>{dungeon} En fraccionamiento</h2>
            <p>
              Te ofecemos mayor seguridad y ateción.
            </p>
          </Card>
        </div>
        <NavLink to='/las-catarinas' ><Button text="Ver más" /></NavLink>
      </div>
    </div>
  );
};
export default Cabins;
