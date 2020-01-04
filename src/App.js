import React from 'react';
import {Route,Switch} from 'react-router-dom';
import SubEvent from "../src/components/SubEvent"
import Eventdetails from './components/Eventdetails';
import LandingMain from './components/LandingMain';
import Pronite from './components/Pronite';
import Team from "./components/Team";
import Contact from './components/Contact';
import Sponsors from './components/Sponsors';
import Event from './components/Event';
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="">
    <Navbar pageWrapId="wrapper" outerContainerId="outer-container" />    
    <Switch> 
        <Route exact path="/event/gamex" component= {SubEvent}  />
        <Route exact path="/event/gamex/:id" component= {Eventdetails} />
        <Route exact path="/pronite" component= {Pronite} />
        <Route exact path="/team" component= {Team} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/sponsors" component={Sponsors} />
        <Route exact path="/event" component={Event} />
        <Route exact path="/" component={LandingMain} />
    </Switch>
    </div>
  );
}

export default App;
