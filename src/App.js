import { Fragment } from "react";
import {Route, Routes} from 'react-router-dom';
import MainLayout from "./Layouts/MainLayout";
import Contacts from "./Pages/Contacts";
import LasCatarinas from "./Pages/LasCatarinas";
import Mazamitla from "./Pages/Mazamitla";

function App() {
  return (
    <Fragment>
      <MainLayout>
          <Route path="/las-catarinas">
            <LasCatarinas />
          </Route>
          <Route path="/conoce-mazamitla">
            <Mazamitla />
          </Route>
          <Route path="/contactos" >
            <Contacts />
          </Route>
      </MainLayout>
    </Fragment>
  );
}

export default App;
