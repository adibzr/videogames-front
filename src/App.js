import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import CardDetail from "./components/CardDetail";
import GameCreate from "./components/GameCreate";
import "./styles.css";

function App() {
  return (
    <div>
      <Route exact path={"/"} component={LandingPage} />
      <Route path={"/home"} component={Home} />
      <Route path={"/videogames/:idVideogame"} component={CardDetail} />
      <Route exact path={"/videgames/create"} component={GameCreate} />
    </div>
  );
}

export default App;
