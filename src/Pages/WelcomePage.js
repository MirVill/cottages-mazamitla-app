import logo from "../Assets/Images/Logo-cabaña.png";
import Cabins from "../Components/Welcome/Cabins";
import MazamitlaResume from "../Components/Welcome/mazamitlaResume";
const WelcomePage = () => {
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
    </div>
  );
};
export default WelcomePage;
