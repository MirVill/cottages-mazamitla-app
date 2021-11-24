import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DesktopNavbar from "./Navbar/DesktopNavbar";
import MobileNavbar from "./Navbar/MobileNavbar";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const menu = <FontAwesomeIcon icon={faBars} size="lg" />;
  const menuClickHandler = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div className="header-container">
      <h1 className="header-title">Cottages Mazamitla</h1>
      <DesktopNavbar />
      {menuIsOpen && <MobileNavbar />}
      <div className="header-menu" onClick={menuClickHandler}>
        {menu}
      </div>
    </div>
  );
};

export default Header;
