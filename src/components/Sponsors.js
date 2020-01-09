import React from "react";
import bp from "../img/Sponsors/bp.png";
import tata from "../img/Sponsors/tata.png";
import vh from "../img/Sponsors/vh1.jpeg";
import mtv from "../img/Sponsors/mtv.jpeg";

const Sponsors = () => {
  return (
    <section className="sponsor-page">
      <h1>Sponsors</h1>
      <div className="sponsors-container">
        <h3>Title Sponsors</h3>
        <div className="sponsors-list">
          <img src={bp} alt="bp" />
          <img src={tata} alt="tata" />
        </div>
      </div>
      <div className="sponsors-container">
        <h3>In Association With</h3>
        <div className="sponsors-list">
          <img src={vh} alt="vh" />
          <img src={mtv} alt="mtv" />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
