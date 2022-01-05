import { NavLink } from "react-router-dom";
import Card from "../Utils/Card";
import Button from "../Utils/Button";
import { useEffect } from "react";
import AboutUsInfo from "../Components/Contacts/Data/AboutUsInfo";
import AboutUsCard from "../Components/Contacts/AboutUsCard";

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contacts__page-container">
      <section className="contacts__section">
        <h2>Contactos</h2>
        <p>Para reservar o aclarar dudas, puedes contactar a: </p>
        <div className="contacts__section-cards">
          <Card>
            <div className="contact-wrapper">
              <h3>Sr. Jaime Villa</h3>
              <p>Tel: 341-41-12-501</p>
            </div>
          </Card>
          <Card>
            <div className="contact-wrapper">
              <h3>Sr. Salvador (Administrador)</h3>
              <p>Tel: 333-47-50-883</p>
            </div>
          </Card>
        </div>
      </section>
      <section className="contacts__meet-us">
        <h1>Conocenos</h1>
        <div className="contacts__meet-us--details">
          <AboutUsCard
            title={AboutUsInfo[0].title}
            text={AboutUsInfo[0].text}
          />
          <AboutUsCard
            title={AboutUsInfo[1].title}
            text={AboutUsInfo[1].text}
          />
          <AboutUsCard
            title={AboutUsInfo[2].title}
            text={AboutUsInfo[2].text}
          />
        </div>
      </section>
      <NavLink to="las-catarinas">
        <Button text="Cabañas" />
      </NavLink>
    </div>
  );
};
export default Contacts;
