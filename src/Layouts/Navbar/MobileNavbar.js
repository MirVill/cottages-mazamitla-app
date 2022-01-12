import NavLinks from "./NavLinks";

const MobileNavbar = (props) => {
   return (
    <nav className="header-navbar-mobile">
      <NavLinks onClick={props.onClickLinkHandler} />
    </nav>
  );
};

export default MobileNavbar;
