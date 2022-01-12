import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import DesktopNavbar from "./Navbar/DesktopNavbar";
import MobileNavbar from "./Navbar/MobileNavbar";
import { NavLink } from "react-router-dom";
import LogoS from "../Assets/Images/Logo-cabañaS.png";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menu = <FontAwesomeIcon icon={faBars} size="lg" />;
  const menuClickHandler = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  const LinkClickHandler = () => {
    setMenuIsOpen(false);
  }
  return (
    <div className="header-container">
      <NavLink to="/inicio" className="header-navlinks">
        <div className="header-container__title">
        <img src={LogoS} alt="Logo" />
        <h1 className="header-title">Cabañas Las Catarinas</h1>
        </div>
      </NavLink>
      <DesktopNavbar />
      {menuIsOpen && <MobileNavbar onClickLinkHandler={LinkClickHandler}/>}
      <div className="header-menu" onClick={menuClickHandler}>
        {menu}
      </div>
    </div>
  );
};

export default Header;
