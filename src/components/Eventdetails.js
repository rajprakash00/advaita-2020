import React, { Component } from 'react'
import data from "../events_new"
import games from "../img/Gamex.jpg"
import gamex from "../img/GamexBg.jpg";
import cult from "../img/CultBg.jpg";
import tech from "../img/TechBG.jpg";
import food from "../img/FoodBg.jpg";
import art from "../img/ArtBg.jpg";

export default class Eventdetails extends Component {
   
  render() {
    const {category} = this.props.match.params
    const {id} = this.props.match.params

   // console.log(Object.values())

            return (
            
            <div className="card_details" style={{backgroundImage:`url(${gamex})`}}>
                <h1>{category}</h1>
                { Object.values(data.categories[category]).map(x => 
                Object.values(x)[0].id == id ? //(<h1>{Object.values(x)[0].description}</h1>): ""
                (
                  <div className="card_indi">
                     <img src={games} className="event_decard" style={{borderRadius:"20px"}} height="460" width="400"/> 
                    <div className="written">
                     <p>{Object.values(x)[0].description}</p> 
                     <div className="but_eve">
                     <button className="event_but">
                            RULES
                        </button>
                        <button className="event_but">
                            REGISTER
                        </button>
                        </div>
                        </div>
                  </div>
                  
                ):""
         ) }
             </div>
         
        )
    }

}



/*
const mapStateToProps = (state,ownProps) =>{
    let id= ownProps.match.params.id
    return{
        detail:state.categories.gamex.find(detail => detail.id===id)
    }
}

export default connect(mapStateToProps)(Eventdetails)

*/