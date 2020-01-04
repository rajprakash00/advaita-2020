import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import tech from "../img/TechT.png"
import art from "../img/ArtT.png"
import food from "../img/FoodT.png"
import cult from "../img/CultT.png"
import game from "../img/GamexT.png"

export default class Event extends Component {
    
    render() {
        return (
            <div className="main_ev">
                <h1>EVENTS</h1>
		 
               <div className="diamond">
                
                <img className="upper_img"  src={tech} height="350" width="350"/>  
                <img className="upper_img"  src={cult} height="350" width="350"/>
                <img className="upper_img" src={food} height="350" width="350"/>
                <img className="upper_img" src={art} height="350" width="350"/>
                <img className="upper_img" src={game} height="350" width="350"/>
               </div>
            </div>
        )
    }
}
