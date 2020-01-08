import React, { Component } from "react";
import data from "../events_new";
import games from "../img/Gamex.jpg";
import gamex from "../img/backgrounds/GamexBg.jpg";
import cult from "../img/backgrounds/CultBg.jpg";
import tech from "../img/backgrounds/TechBG.jpg";
import food from "../img/backgrounds/FoodBg.jpg";
import art from "../img/backgrounds/ArtBg.jpg";

export default class Eventdetails extends Component {
  render() {
    const { category } = this.props.match.params;
    const { id } = this.props.match.params;
    return (
      <section
        className="card_details"
        style={{ backgroundImage: `url(${gamex})` }}
      >
        <h1>{category}</h1>
        {Object.values(data.categories[category]).map(x =>
          Object.values(x)[0].id == id ? ( //(<h1>{Object.values(x)[0].description}</h1>): ""
            <div className="card_indi">
              <img
                src={games}
                className="event_decard"
                style={{ borderRadius: "20px" }}
                alt="event card"
                height="460"
                width="400"
              />
              <div className="written">
                <p>{Object.values(x)[0].description}</p>
                <div className="but_eve">
                  <button className="event_but">RULES</button>
                  <button className="event_but">REGISTER</button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </section>
    );
  }
}
