import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import TeamCard from './TeamCard'


export default class Team extends Component {
    render() {
        return (
            <div className="team_bg">
            <Link style={{color:"red"}} to="/">Home</Link>
              <h1>The Team</h1>  
              <div className="team_cont">
                <TeamCard />
                <TeamCard />
                <TeamCard />
            
              </div>
            </div>
        )
    }
}
