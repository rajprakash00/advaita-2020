import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import fifa from "../img/fifa.jpeg"
import pubg from "../img/pubg.jpeg"
import tech from "../img/TechBG.jpg"
import logo from"../img/logo.png"

export default class Pronite extends Component {
    render() {
        return (
            <div className="pronite_main">
            <Link style={{color:"red"}} to="/">Home</Link>
               <h1 style={{fontSize:"3.5em"}}>PRONITES</h1> 
               <div className="img_con">
                   <div className="card_pro">
                       <img className="main_img" src={fifa}  />
                       <button className="epro" >
                            Get E-Pass
                       </button>
                   </div>
                   <div className="card_pro">
                        <img className="main_img" src={pubg}  />
                        <button className="epro">
                            Get E-Pass
                        </button> 
                   </div>
                   <div className="card_pro">
                        <img className="main_img" src={tech}  />
                        <button className="epro">
                            Get E-Pass
                        </button> 
                   </div>
                   
               </div>
            </div>
        )
    }
}
