import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import TeamCard from './TeamCard'
import asd from "../img/asd.png"


export default class Team extends Component {
    render() {
        return (
            <div className="team_bg">
            
              <h1>THE TEAM</h1>  
              <div className="team_cont">
                <TeamCard />
                

              </div>
            </div>
        )
    }
}
