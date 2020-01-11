import React from "react";
import { Link } from "react-router-dom";

const Lastsponsor = () => {
  return (
    <section className="sponsor-page">
      <h1>Sponsors 2020</h1>
      <div className="sponsor_outer">
        <Link to="/sponsors_old">
          {" "}
          <button className="sponsor_button">
            Check out our 2019 Sponsors
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Lastsponsor;
