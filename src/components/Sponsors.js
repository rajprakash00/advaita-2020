import React, { Component } from 'react'
import { Link } from "react-router-dom";
import bp from "../img/bp.png"
import tata from "../img/tata.png"
import vh from "../img/vh1.jpeg"
import mtv from "../img/mtv.jpeg"

export default class Sponsors extends Component {
    render() {
        return (
            <div className="sponsor_main">
               
                <h1>SPONSORS</h1>
               <section className="title_section">
                <h2 className="spon_title">Title Sponsor</h2>
                <div className="spon_img">
                    <img src={bp} /*className="company"*/ width="70%" />
                    <img src={tata} className="company" width="70%" height="200" /*style={{marginLeft:"100px"}}*//>
                </div>
               </section> 
               <section className="title_section">
                <h2 className="spon_title">In Association With</h2>
                 <div className="spon_img">
                     <img src={vh} />
                     <img className="company" src={mtv}/>
                 </div>
               </section>
            </div>
        )
    }
}
