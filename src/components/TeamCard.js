import React, { Component } from 'react'
import bgteam from "../img/card.png"
import name13 from "../img/Frame.png"
import tweet from "../img/twitter.png"
import fb from "../img/facebook.png"
import insta from "../img/instagram.png"
import Tilt from 'react-parallax-tilt'
import name1 from "../img/asd.png"
import name2 from "../img/asd2.png"
import name3 from "../img/asd3.png"
import name4 from "../img/asd4.png"
import name5 from "../img/asd5.png"
import name6 from "../img/asd6.png"
import name7 from "../img/RajashreeBasu.png"
import name8 from "../img/SaswatBasu.png"
import name9 from "../img/ShivSingh.png"
import name10 from "../img/SiddharthPa.png"
import name11 from "../img/Soumyajeet.png"
import name12 from "../img/SumeetLenka.png"

const image=[[
    name1,
    name2,
    name3,],
    [name4,
    name5,
    name6,],
    [name7,
    name8,
    name9,],
    [name10,
    name11,
    name12,],
    [name13]

]
export default class TeamCard extends Component {
   
    render() {
        return (    
             image.map(item =>{
                return(
            <div>
          {item.map(card =>{
              return(
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
                
                 
                    <div className="img_frame"><img className="circle_fr" src={card} /*height="280" width="280"*/ /> </div>
                 
          
               
                </Tilt>
              </div>

          
)})}
</div>
)})
             

            
        )
    
}}
