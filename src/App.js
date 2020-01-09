import React from "react";
import { Route, Switch, Link, withRouter } from "react-router-dom";

import LandingMain from "./components/LandingMain";
import Team from "./components/Team";
import Pronite from "./components/Pronite";
import Navbar from "./components/Navbar";
import Sponsors from "./components/Sponsors";
import Event from "./components/Event";
import About from "./components/About";
import Contact from "./components/Contact";
import TechCarousel from "./components/TechCarousel";
import CultCarousel from "../src/components/CultCarousel";
import GamexCarousel from "./components/GamexCarousel";
import EventDetails from "./components/EventDetails";
import ArtCarousel from "./components/ArtCarousel";
import FoodCarousel from "./components/FoodCarousel";
import Error from "./components/Error404";

import logo from "./img/logo.png";

const App = ({ location }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  //const [displayLogo, setDisplayLogo] = React.useState(false);
  return (
    <>
      {location.pathname !== "/" && (
        <Link to="/">
          <img className="main-logo" src={logo} alt="advaita" />
        </Link>
      )}
      <Navbar isOpen={isOpen} toggleMenu={setIsOpen} />
      <Switch>
        <Route path="/event/cult" component={CultCarousel} exact />
        <Route path="/event/tech" component={TechCarousel} exact />
        <Route path="/event/gamex" component={GamexCarousel} exact />
        <Route path="/event/art" component={ArtCarousel} exact />
        <Route path="/event/food" component={FoodCarousel} exact />
        <Route path="/event/:category/:id" component={EventDetails} />
        <Route path="/contact" component={Contact} />
        <Route path="/sponsors" component={Sponsors} />
        <Route path="/pronite" component={Pronite} />
        <Route path="/event" component={Event} />
        <Route path="/team" component={Team} />
        <Route path="/about" component={About} />
        <Route path="/" component={LandingMain} exact />

        <Route component={Error} />
      </Switch>
    </>
  );
};

export default withRouter(App);
