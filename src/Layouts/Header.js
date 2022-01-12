import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState} from "react";
import DesktopNavbar from "./Navbar/DesktopNavbar";
import MobileNavbar from "./Navbar/MobileNavbar";
import { NavLink } from "react-router-dom";
import LogoS from "../Assets/Images/Logo-cabañaS.png";

const Header = (props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menu = <FontAwesomeIcon icon={faBars} size="lg" />;
  const menuClickHandler = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  const linkClickHandler = () => {
    setMenuIsOpen(false);
  }
 
  if(props.mainIsClicked && menuIsOpen) {
      setMenuIsOpen(false);
    } 
   return (
    <div className="header-container">
      <NavLink to="/inicio" className="header-navlinks">
        <div className="header-container__title">
        <img src={LogoS} alt="Logo" />
        <h1 className="header-title" onClick={menuIsOpen ? linkClickHandler : undefined}>Cabañas Las Catarinas</h1>
        </div>
      </NavLink>
      <DesktopNavbar />
      {menuIsOpen && <MobileNavbar onClickLinkHandler={linkClickHandler}/>}
      <div className="header-menu" onClick={menuClickHandler}>
        {menu}
      </div>
    </div>
  );
};

export default Header;
