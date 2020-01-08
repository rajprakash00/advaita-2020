import React from "react";
import { Route, Switch } from "react-router-dom";
import TechCarousel from "./components/TechCarousel";

import CultCarousel from "../src/components/CultCarousel";

import LandingMain from "./components/LandingMain";
import Pronite from "./components/Pronite";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Sponsors from "./components/Sponsors";
import Event from "./components/Event";
import Navbar from "./components/Navbar";
import GamexCarousel from "./components/GamexCarousel";
import ArtCarousel from "./components/ArtCarousel";
import FoodCarousel from "./components/FoodCarousel";
import About from "./components/About";
import Error from "./components/Error404";

import EventDetails from "./components/EventDetails";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Navbar isOpen={isOpen} toggleMenu={setIsOpen} />
      <Switch>
        <Route path="/pronite" component={Pronite} />
        <Route path="/team" component={Team} />
        <Route path="/event/cult" component={CultCarousel} exact />
        <Route path="/event/tech" component={TechCarousel} exact />
        <Route path="/event/gamex" component={GamexCarousel} exact />
        <Route path="/event/art" component={ArtCarousel} exact />
        <Route path="/event/food" component={FoodCarousel} exact />
        <Route path="/event/:category/:id" component={EventDetails} />
        <Route path="/contact" component={Contact} />
        <Route path="/sponsors" component={Sponsors} />
        <Route path="/event" component={Event} />
        <Route path="/about" component={About} />
        <Route path="/" component={LandingMain} exact />

        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
