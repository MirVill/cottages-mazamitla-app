import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DesktopNavbar from "./Navbar/DesktopNavbar";
import MobileNavbar from "./Navbar/MobileNavbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menu = <FontAwesomeIcon icon={faBars} size="lg" />;
  const menuClickHandler = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div className="header-container">
      <NavLink to="/inicio" className="header-navlinks">
        <h1 className="header-title">Cabañas Las Catarinas</h1>
      </NavLink>
      <DesktopNavbar />
      {menuIsOpen && <MobileNavbar />}
      <div className="header-menu" onClick={menuClickHandler}>
        {menu}
      </div>
    </div>
  );
};

export default Header;
