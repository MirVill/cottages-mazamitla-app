import logo from "../Assets/Images/Logo-cabaña.png";
import Cabins from "../Components/Welcome/Cabins";
import MazamitlaResume from "../Components/Welcome/mazamitlaResume";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const WelcomePage = () => {
  const phone = <FontAwesomeIcon icon={faPhoneAlt} size="sm" className="phone"/>
  return (
    <div className="welcome-page">
      <section className="title-section">
        <img src={logo} alt="Logo" />
        <h1>
          Las Catarinas<span>Cabañas Mazamitla</span>
        </h1>
      </section>
      <section className="resume-section">
      <Cabins />
      <MazamitlaResume />
      </section>
      <section className="reservations-section">
        <h1>Reservaciones:</h1>
        <h1>{phone} 341-41-12-501</h1>
      </section>
    </div>
  );
};
export default WelcomePage;
