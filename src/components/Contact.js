import React, { Component } from 'react'
import { Link } from "react-router-dom";
import realfb from "../img/fb.png"
import realinsta from "../img/insta5.jpeg"
import realyou  from "../img/realyou.png"

export default class Contact extends Component {
    componentDidMount() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    render() {
        return (
            <div className="contact_main">
            <Link to="/" style={{color:"red"}}>Home</Link>
                <h1>CONTACT US</h1>
                <div className="venue_box">
                    <div className="text_box">
                        <h2 className="venue_title">Address</h2>
                        <h3 className="adress">IIIT Bhubansewar,</h3>
                         <h3 className="adress">Gothaptna,</h3>
                         <h3 className="adress">PO- Malipada,</h3>
                         <h3 className="adress">Bhubansewar- 751003,</h3>
                         <h3 className="adress"> Odisha </h3>
                        <h2 className="venue_title">Phone</h2>
                        <h3 className="adress">9191919191    9191919191</h3>
                        <h2 className="venue_title">Mail</h2>
                        <h3 className="adress">contact@advaita.io</h3>
                        <h2 className="venue_title">Follow us on</h2>
                        <div className="icon" style={{display:"flex",flexDirection:"row",justifyContent:"space-between",/*float:"left"/*marginLeft:"-60px"*/}}>
                            <img src={realinsta} href="#" width="45" height="45" style={{borderRadius:"11px"}} />
                            <img src={realfb} href="#" width="45" height="45" style={{borderRadius:"11px"}} />
                            <img src={realyou} href="#" width="45" height="45" style={{borderRadius:"11px"}} />
                        </div>
                    </div>
                    <div className="map_box">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1337466661125!2d85.74122071475028!3d20.294730386400488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1907923fc9c557%3A0xd3b0b05336a9dfaa!2sIIIT%2CBBSR!5e0!3m2!1sen!2sin!4v1575818027630!5m2!1sen!2sin"
                        title="Venue"
                        frameBorder="0"
                        style={{ border: 0 }}
                    ></iframe>
                    </div>
                </div>
            </div>
        )
    }
}
