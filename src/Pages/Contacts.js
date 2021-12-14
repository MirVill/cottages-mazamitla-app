import { NavLink } from "react-router-dom";
import Card from "../Components/Card";
import Button from "../Utils/Button";

const Contacts = () => {
  return (
    <div className="contacts__page-container">
      <section className="contacts__section">
        <h2>Contactos</h2>
        <p>Para reservar o aclarar dudas, puedes contactar a: </p>
        <div className="contacts__section-cards">
          <Card>
            <h3>Sr. Jaime Villa</h3>
            <p>Tel: 341-41-12-501</p>
          </Card>
          <Card>
            <h3>Sr. Salvador (Administrador)</h3>
            <p>Tel: 333-47-50-883</p>
          </Card>
        </div>
      </section>
      <section className="contacts__meet-us">
        <h1>Conocenos</h1>
        <div className="contacts__meet-us--details">
          <Card>
            <h3 className="contacts__meet-us--title">¿Quienes Somos?</h3>
            <p>
              Somos un negocio familiar, encargado de brindarte el mejor
              hospedaje en Mazamitla, Jalisco. Nuestra Cabaña te hará escapar
              del bullicio de la ciudad durante los dias que decidas quedarte, se
              encuentra ubicada en el fraccinamiento la Toscana, lugar en el que
              las cabañas se encuentran en armonia con el bosque.
            </p>
          </Card>
          <Card>
            <h3 className="contacts__meet-us--title">
              Politica de reservación
            </h3>
            <p>
              Para reservar es necesario pagar al menos la mitad del costo total
              de su hospedaje. Recibimos pagos mediante depositos, ya sea desde
              oxxo o tranferencia bancaria. El resto debe ser liquidado una
              semana antes de su fecha de hospedaje.
            </p>
          </Card>
          <Card>
            <h3 className="contacts__meet-us--title">Proceso de llegada</h3>
            <p>
              A tu llegada al fraccionamiento, deberas contactar al administrador de la cabaña, el
              Sr. Salvador. El te hará entrega de las llaves y te mostrará
              la ubicaión exacta de Las Catarinas. Cualquier situación que se
              tenga acerca de las instalaciones debera ser tratado con el.
            </p>
          </Card>
        </div>
      </section>
      <NavLink to='las-catarinas'><Button text="Cabañas" /></NavLink>
    </div>
  );
};
export default Contacts;
