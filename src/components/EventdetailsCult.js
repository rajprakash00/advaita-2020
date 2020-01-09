import React, { Component } from 'react'
import data from "../events_new"
import cult from "../img/CultBg.jpg";



export default class EventdetailsGamex extends Component {
   
  render() {
   
    const {id} = this.props.match.params
          
            return (
            
            <div className="card_details" style={{backgroundImage:`url(${cult})`}}>
                <h1>Cult</h1>
                { Object.values(data.categories["cult"]).map(x => 
                
                Object.values(x)[0].id == id ? 
                (
                  <div className="card_indi">
                     <img src={require (`../img/${Object.values(x)[0].img_path}.png`)} className="event_decard" style={{borderRadius:"20px"}} height="460" width="400"/> 
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

