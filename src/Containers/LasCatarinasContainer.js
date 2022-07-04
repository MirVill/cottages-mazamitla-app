import InformationLasCatarinas from "../Components/LasCatarinas/InformationLasCatarinas";
import Button from "../Utils/Button";
import LasCatarinasGallery from "../Components/LasCatarinas/LasCatarinasGallery";
import Card from "../Utils/Card";
import { useState } from "react/cjs/react.development";
import Modal from "../Components/Modal";

const LasCatarinasData = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const btnClickHandler = () => {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <div className="cottage-page-container">
      <h1 className="page-title">Las Catarinas</h1>
      <LasCatarinasGallery />
      <InformationLasCatarinas />
      <Card><h3>¡Hospédate entre semana y obten precio especial de $2500MXN por noche!</h3></Card>
      <Button text="Reservar" onClick={btnClickHandler} />
      {modalIsOpen && <Modal modalIsOpenHandler={btnClickHandler} />}
    </div>
  );
};

export default LasCatarinasData;
