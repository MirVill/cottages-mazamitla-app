import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <NavLink to="/contactos" className="footer-navlink">
        <button>¿Quienes somos?</button>
      </NavLink>
      <ul>
        <li>Politica de reservación</li>
        <li>Proceso de llegada</li>
      </ul>
    </footer>
  );
};

export default Footer;
