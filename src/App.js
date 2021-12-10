import { Fragment } from "react";
import MainLayout from "./Layouts/MainLayout";
import LasCatarinas from "./Pages/LasCatarinas";
import Mazamitla from "./Pages/Mazamitla";

function App() {
  return (
    <Fragment>
      <MainLayout >
      <Mazamitla />
      </MainLayout>
    </Fragment>
  );
}

export default App;
