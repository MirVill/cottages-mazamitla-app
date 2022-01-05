import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul>
      <NavLink to="/las-catarinas" className="header-navlinks">
        <li>Las Catarinas</li>
      </NavLink>
      <NavLink to="/conoce-mazamitla" className="header-navlinks">
        <li>Conoce Mazamitla</li>
      </NavLink>
      <NavLink to="/contactos" className="header-navlinks">
        <li>Contactos</li>
      </NavLink>
    </ul>
  );
};
export default NavLinks;
