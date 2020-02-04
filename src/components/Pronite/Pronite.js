import React from "react";
import ProniteCard from "./ProniteCard";

import pass from "../../img/pass.png";

const Pronite = () => {
  return (
    <section className="pronite-page">
      <h1>ProNites</h1>
      <div className="pronite-container">
        <ProniteCard name="pubg" img={pass} link={pass} />
      </div>
    </section>
  );
};

export default Pronite;
