import React from "react";
import { Route, Switch, Link, withRouter } from "react-router-dom";
import ReactGA from "react-ga";
import { AuthContext } from "./components/Authentication/authContext";

import Loader from "./components/Loader";
import LandingMain from "./components/LandingMain";
import Pronite from "./components/Pronite/Pronite";
import Navbar from "./components/Navbar";
import Event from "./components/Event";
import About from "./components/About";
import Contact from "./components/Contact";
import EventDetails from "./components/EventDetails";
import Sponsors from "./components/Sponsors/Sponsors";
import Lastsponsor from "./components/Sponsors/Lastsponsor";
import Team from "./components/Team/Team";
import Error from "./components/Error404";

// Carousels
import TechCarousel from "./components/Carousels/TechCarousel";
import CultCarousel from "../src/components/Carousels/CultCarousel";
import SportsCarousel from "./components/Carousels/SportsCarousel";
import ArtCarousel from "./components/Carousels/ArtCarousel";
import FoodCarousel from "./components/Carousels/FoodCarousel";

// Authentication Routes
import LoginPage from "./components/Authentication/Login";
import RegisterPage from "./components/Authentication/Register";
import TeamRegistration from "./components/Authentication/TeamRegistration";
import Dashboard from "./components/Authentication/Dashboard";
import VerifyEmail from "./components/Authentication/VerifyEmail";

import logo from "./img/logo.png";
import ImageGallery from "./components/ImageGallery";

// Initializing React Google Analytics
ReactGA.initialize("UA-155949666-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const App = ({ location }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [authTokens, setAuthTokens] = React.useState();

  React.useState(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const setToken = data => {
    sessionStorage.setItem("jwtToken", data);
    setAuthTokens(data);
  };

  const removeToken = () => {
    sessionStorage.removeItem("jwtToken");
    setAuthTokens("");
  };

  return (
    <AuthContext.Provider
      value={{
        authTokens,
        setAuthTokens: setToken,
        removeAuthTokens: removeToken
      }}
    >
      {isLoading ? <Loader /> : ""}
      {location.pathname !== "/" && (
        <Link to="/">
          <img className="main-logo" src={logo} alt="advaita" />
        </Link>
      )}
      <Navbar isOpen={isOpen} toggleMenu={setIsOpen} />
      <Switch>
        <Route path="/event/cult" component={CultCarousel} exact />
        <Route path="/event/tech" component={TechCarousel} exact />
        <Route path="/event/sports" component={SportsCarousel} exact />
        <Route path="/event/art" component={ArtCarousel} exact />
        <Route path="/event/food" component={FoodCarousel} exact />
        <Route path="/event/:category/:id" component={EventDetails} />
        <Route path="/contact" component={Contact} />
        <Route path="/sponsors" component={Lastsponsor} />
        <Route path="/sponsors-old" component={Sponsors} />
        <Route path="/gallery" component={ImageGallery} />
        <Route path="/pronite" component={Pronite} />
        <Route path="/event" component={Event} />
        <Route path="/team" component={Team} />
        <Route path="/about" component={About} />

        {/* Authentication Routes */}
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/verify-email" component={VerifyEmail} />
        <Route path="/team-register" component={TeamRegistration} />
        <Route path="/dashboard" component={Dashboard} />

        <Route path="/" component={LandingMain} exact />
        <Route component={Error} />
      </Switch>
    </AuthContext.Provider>
  );
};

export default withRouter(App);
