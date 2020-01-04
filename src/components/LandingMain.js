import React, { Component } from 'react'
import Particles from "react-particles-js";
import Navbar from "./Navbar"
import logo from "../img/logo.png"
import hook from "../img/hook.png"
import fire from "../img/fire.gif"

export default class LandingMain extends Component {
    render() {
        return (
            <div id="outer-container">
            
      <div id="wrapper">
        <Particles
          style={{
            width: "100%",
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 10
          }}
          params={{
            particles: {
              number: {
                value: 200,
                density: { enable: true, value_area: 1000 }
              },
              color: { value: "#fc0000" },
              shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 3 },
                image: { src: "img/github.svg", width: 100, height: 100 }
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
              },
              size: {
                value: 3,
                random: true,
                anim: { enable: true, speed: 5, size_min: 0, sync: false }
              },
              line_linked: {
                enable: false,
                distance: 500,
                color: "#ffffff",
                opacity: 0.4,
                width: 2
              },
              move: {
                enable: true,
                speed: 7.8914764163227265,
                direction: "top",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: false, mode: "bubble" },
                onclick: { enable: false, mode: "repulse" },
                resize: true
              },
              modes: {
                grab: { distance: 400, line_linked: { opacity: 0.5 } },
                bubble: {
                  distance: 400,
                  size: 4,
                  duration: 0.3,
                  opacity: 1,
                  speed: 3
                },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
              }
            },
            retina_detect: true
          }}
        />
        <div className="main-bg" />
       
        <div className="container">
          <img src={logo} alt="advaita logo" />
          <div className="neon-text">Quest of Quaint</div>
        </div>
        <div className="hooks-container">
          <div className="hook-one">
            <img src={hook} alt="hanging anchor" />
          </div>
          <div className="hook-two">
            <img src={hook} alt="hanging anchor" />
          </div>
        </div>
        <div className="overlay-bg" />
      </div>  
            </div>
        )
    }
}
