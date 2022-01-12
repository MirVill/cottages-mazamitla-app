import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <ul>
      <NavLink to="/las-catarinas" className="header-navlinks">
        <li onClick={props.onClick}>Las Catarinas</li>
      </NavLink>
      <NavLink to="/conoce-mazamitla" className="header-navlinks">
        <li onClick={props.onClick}>Conoce Mazamitla</li>
      </NavLink>
      <NavLink to="/contactos" className="header-navlinks">
        <li onClick={props.onClick}>Contactos</li>
      </NavLink>
    </ul>
  );
};
export default NavLinks;
