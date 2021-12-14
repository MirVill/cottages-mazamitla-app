import img from "../../Assets/Images/cottage-photos/cabaña-frente.jpg";
import Button from "../../Utils/Button";
const Cabins = () => {
  return (
    <div className="cabins-container">
      <img src={img} alt="cabaña" className="cabins-img" />
      <div>
        <h1>Alojamiento</h1>
        <div>Excelente ubicaión</div>
        <div>Estacionamiento</div>
        <div>Alojamiento entero</div>
        <div>En fraccionamiento</div>
        <Button text="Ver más" />
      </div>
    </div>
  );
};
export default Cabins;
