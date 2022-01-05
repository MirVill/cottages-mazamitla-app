import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = (props) => {
  return (
    <Fragment>
      <Header />
      <main className="background">{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
