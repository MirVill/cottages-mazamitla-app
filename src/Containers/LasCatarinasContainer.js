import InformationLasCatarinas from "../Components/LasCatarinas/InformationLasCatarinas";
import Button from "../Utils/Button";
import LasCatarinasGallery from "../Components/LasCatarinas/LasCatarinasGallery";
import Card from "../Utils/Card";
import { NavLink } from "react-router-dom";
const LasCatarinasData = () => {
  return (
    <div className="cottage-page-container">
      <h1 className="page-title">Las Catarinas</h1>
      <LasCatarinasGallery />
      <InformationLasCatarinas />
      <Card><h3>¡Hospédate entre semana y obten precio especial de $2500MXN por noche!</h3></Card>
      <NavLink to="/contactos">
        <Button text="Reservar" />
      </NavLink>
    </div>
  );
};

export default LasCatarinasData;
