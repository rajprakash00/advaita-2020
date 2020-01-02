import React from 'react';
import logo from './logo.svg';
import {Route} from 'react-router-dom';
import SubEvent from "../src/components/SubEvent"
import Eventdetails from './components/Eventdetails';
import Landing from './components/Landing';
import Pronite from './components/Pronite';
import Team from "./components/Team";
import Contact from './components/Contact';
import Sponsors from './components/Sponsors';
import Demo from './components/Demo';
import Event from './components/Event';

function App() {
  return (
    <div className="">
        <Route exact path="/event/gamex" component= {SubEvent}  />
        <Route exact path="/event/gamex/:id" component= {Eventdetails} />
        <Route exact path="/pronite" component= {Pronite} />
        <Route exact path="/team" component= {Team} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/sponsors" component={Sponsors} />
        <Route exact path="/demo" component={Demo} />
        <Route exact path="/event" component={Event} />
        <Route exact path="/" component={Landing} />
    </div>
  );
}

export default App;
