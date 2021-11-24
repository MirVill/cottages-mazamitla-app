import { Fragment } from "react";
import MainLayout from "./Layouts/MainLayout";
import LasCatarinas from "./Pages/LasCatarinas";

function App() {
  return (
    <Fragment>
      <MainLayout >
      <LasCatarinas />
      </MainLayout>
    </Fragment>
  );
}

export default App;
