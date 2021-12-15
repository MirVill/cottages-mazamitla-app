import { Fragment } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Contacts from "./Pages/Contacts";
import LasCatarinas from "./Pages/LasCatarinas";
import Mazamitla from "./Pages/Mazamitla";
import WelcomePage from "./Pages/WelcomePage";

function App() {
  return (
    <Fragment>
      <MainLayout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/inicio" />
          </Route>
          <Route path="/inicio">
            <WelcomePage />
          </Route>
          <Route path="/las-catarinas">
            <LasCatarinas />
          </Route>
          <Route path="/conoce-mazamitla">
            <Mazamitla />
          </Route>
          <Route path="/contactos">
            <Contacts />
          </Route>
        </Switch>
      </MainLayout>
    </Fragment>
  );
}

export default App;
