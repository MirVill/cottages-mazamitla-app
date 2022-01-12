import { Fragment, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const mainClickHandler = () => {
    setIsClicked(true) 
  }
  useEffect(() => {
    setIsClicked(false)
  }, [isClicked])
  return (
    <Fragment>
      <Header mainIsClicked={isClicked} />
      <main className="background" onClick={mainClickHandler}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
