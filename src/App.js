import { Fragment } from "react";
import {Route, Routes} from 'react-router-dom';
import MainLayout from "./Layouts/MainLayout";
import LasCatarinas from "./Pages/LasCatarinas";
import Mazamitla from "./Pages/Mazamitla";
import WelcomePage from "./Pages/WelcomePage";

function App() {
  return (
    <Fragment>
      <MainLayout>
        <Route path="/inicio">
          <WelcomePage />
        </Route>
          <Route path="/las-catarinas">
            <LasCatarinas />
          </Route>
          <Route path="/conoce-mazamitla">
            <Mazamitla />
          </Route>
      </MainLayout>
    </Fragment>
  );
}

export default App;
