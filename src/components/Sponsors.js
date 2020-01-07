// import React, { Component } from 'react'
// import { Link } from "react-router-dom";

// export default class Sponsors extends Component {
//     render() {
//         return (
//             <div className="sponsor_main">

//                 <h1>SPONSORS</h1>
//                <section className="title_section">
//                 <h2 className="spon_title">Title Sponsor</h2>
//                 <div className="spon_img">
//                     <img src={bp} /*className="company"*/ width="70%" />
//                     <img src={tata} className="company" width="70%" height="200" /*style={{marginLeft:"100px"}}*//>
//                 </div>
//                </section>
//                <section className="title_section">
//                 <h2 className="spon_title">In Association With</h2>
//                  <div className="spon_img">
//                      <img src={vh} />
//                      <img className="company" src={mtv}/>
//                  </div>
//                </section>
//             </div>
//         )
//     }
// }
import React from "react";
import bp from "../img/bp.png";
import tata from "../img/tata.png";
import vh from "../img/vh1.jpeg";
import mtv from "../img/mtv.jpeg";

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
