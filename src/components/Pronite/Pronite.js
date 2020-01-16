import React from "react";
import ProniteCard from "./ProniteCard";
import fifa from "../../img/fifa.jpeg";
import pubg from "../../img/pubg.jpeg";
import tech from "../../img/backgrounds/TechBg.jpg";

const Pronite = () => {
  return (
    <section className="pronite-page">
      <h1>ProNites</h1>
      <div className="pronite-container">
        <ProniteCard name="pubg" img={pubg} link="#" />
        <ProniteCard name="fifa" img={fifa} link="#" />
        <ProniteCard name="tech" img={tech} link="#" />
      </div>
    </section>
  );
};

export default Pronite;
