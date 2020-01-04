import React, { Component } from 'react'
import bgteam from "../img/card.png"
import frames from "../img/Frame.png"
import tweet from "../img/twitter.png"
import fb from "../img/facebook.png"
import insta from "../img/instagram.png"
import Tilt from 'react-parallax-tilt'

export default class TeamCard extends Component {
   
    render() {
        return (    
            <div className="team_card">
            <Tilt className="outer_ele" perspective={800} scale={1} style={{height:485,width:334}} > 
                <div className="img_team"> <img className="team_adv" src={bgteam} />
                    <div className="content_card">
                   
                      <h2 className="name_head">Bosco Caesar</h2>
                      <h3 className="pos_head">Tech Head</h3>
                      <h3 className="cont_no">+91 9911199191</h3>
                      <div className="social_icons">
                          <img style={{cursor:"pointer"}} src={tweet} height="30" width="30" href="#" />
                          <img style={{cursor:"pointer"}} src={fb} height="30" width="30" href="#" />
                          <img style={{cursor:"pointer"}} src={insta} height="30" width="30" href="#" />
                      </div>
                    </div>  
                </div>
                
               
                <div className="img_frame"><img className="circle_fr" src={frames} /*height="280" width="280"*/ /> </div>
                </Tilt>
              </div>
             

            
        )
    }
}
