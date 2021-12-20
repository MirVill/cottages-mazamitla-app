import InformationLasCatarinas from "../Components/LasCatarinas/InformationLasCatarinas";
import Button from "../Utils/Button";
import LasCatarinasGallery from "../Components/LasCatarinas/LasCatarinasGallery";
import { NavLink } from "react-router-dom";
const LasCatarinasData = () => {
  return (
    <div className="cottage-page-container">
      <h1 className="page-title">Las Catarinas</h1>
      <LasCatarinasGallery />
      <InformationLasCatarinas />
      <NavLink to="/contactos">
        <Button text="Reservar" />
      </NavLink>
    </div>
  );
};

export default LasCatarinasData;
