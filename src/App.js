import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import SubEvent from "../src/components/SubEvent";
import Eventdetails from "./components/Eventdetails";
import LandingMain from "./components/LandingMain";
import Pronite from "./components/Pronite";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Sponsors from "./components/Sponsors";
import Event from "./components/Event";
import About from "./components/About";
import Error from "./components/Error404";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Navbar isOpen={isOpen} toggleMenu={setIsOpen} />
      <Switch>
        <Route exact path="/event/gamex" component={SubEvent} />
        <Route exact path="/event/gamex/:id" component={Eventdetails} />
        <Route exact path="/pronite" component={Pronite} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/sponsors" component={Sponsors} />
        <Route exact path="/event" component={Event} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={LandingMain} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
