import React from 'react';
import {Route,Switch} from 'react-router-dom';
import SubEvent from "../src/components/SubEvent"

import SubEventCult from "../src/components/CultCarousel"
//import Eventdetails from './components/EventdetailsGamex';
import LandingMain from './components/LandingMain';
import Pronite from './components/Pronite';
import Team from "./components/Team";
import Contact from './components/Contact';
import Sponsors from './components/Sponsors';
import Event from './components/Event';
import Navbar from "./components/Navbar";
import GamexCarousel from './components/GamexCarousel';
import ArtCarousel from './components/ArtCarousel';
import FoodCarousel from './components/FoodCarousel';
import EventdetailsArt from './components/EventdetailsArt';
import EventdetailsCult from './components/EventdetailsCult';
import EventdetailsGamex from './components/EventdetailsGamex';
import EventdetailsFood from './components/EventdetailsFood';
import EventdetailsTech from './components/EventdetailsTech';


function App() {
  return (
    <div className="">
    <Navbar pageWrapId="wrapper" outerContainerId="outer-container" />    
    <Switch> 
        <Route exact path="/event/tech" component= {SubEvent}  />
        <Route exact path="/event/cult" component= {SubEventCult}  />
        <Route exact path="/event/tech/:id" component= {EventdetailsTech} />
        <Route exact path="/event/cult/:id" component= {EventdetailsCult} />
        <Route exact path="/event/art/:id" component= {EventdetailsArt} />
        <Route exact path="/event/food/:id" component= {EventdetailsFood} />
        <Route exact path="/event/gamex/:id" component= {EventdetailsGamex} />
        <Route exact path="/pronite" component= {Pronite} />
        <Route exact path="/team" component= {Team} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/sponsors" component={Sponsors} />
        <Route exact path="/event" component={Event} />
        <Route exact path="/" component={LandingMain} />
        <Route exact path="/event/gamex" component={GamexCarousel} />
        <Route exact path="/event/art" component={ArtCarousel} />
        <Route exact path="/event/food" component={FoodCarousel} />
        
    </Switch>
    </div>
  );
}

export default App;
