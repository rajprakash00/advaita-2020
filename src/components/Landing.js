import React, { Component } from 'react'
import Particles from 'react-particles-js';
import { Link } from "react-router-dom";
import logo from "../img/logo.png"
import particle from "../particlesjs-config"



export default class Landing extends Component {
    render() {
        return (
            <div>
            <Particles params={particle} className="snow" style={{width:"100vw",height:"100vh",position:"absolute",top:"0",left:"0"}} />
            <div className="bg main_page" >
            <Link style={{color:"red",position:"relative"}} to="/team">Team</Link>
            <Link style={{color:"red",position:"relative"}} to="/pronite">Pronite</Link>
            <Link style={{color:"red",position:"relative"}} to="/event/gamex">Subevent</Link>
            <Link style={{color:"red",position:"relative"}} to="/sponsors">Sponsor</Link>
            <Link style={{color:"red",position:"relative"}} to="/contact">Contact</Link>
	    <Link style={{color:"red",position:"relative"}} to="/event">Event</Link>
               <img src={logo} className="logo_main" style={{marginTop:"200px"}}/> 
            </div>
            
            </div>
       
        )
    }
}
