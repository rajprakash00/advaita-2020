import React, { Component } from "react";
import tech from "../img/EventCards/TechT.png";
import art from "../img/EventCards/ArtT.png";
import food from "../img/EventCards/FoodT.png";
import cult from "../img/EventCards/CultT.png";
import game from "../img/EventCards/GamexT.png";

export default class Event extends Component {
  render() {
    return (
      <section className="main_ev">
        <h1>Events</h1>

        <div className="diamond">
          <img
            className="upper_img"
            alt="event card"
            src={tech}
            height="350"
            width="350"
            onClick={() => this.props.history.push("/event/tech")}
          />
          <img
            className="upper_img"
            alt="event card"
            src={cult}
            height="350"
            width="350"
            onClick={() => this.props.history.push("/event/cult")}
          />
          <img
            className="upper_img"
            alt="event card"
            src={food}
            height="350"
            width="350"
            onClick={() => this.props.history.push("/event/food")}
          />
          <img
            className="upper_img"
            alt="event card"
            src={art}
            height="350"
            width="350"
            onClick={() => this.props.history.push("/event/art")}
          />
          <img
            className="upper_img"
            alt="event card"
            src={game}
            height="350"
            width="350"
            onClick={() => this.props.history.push("/event/sports")}
          />
        </div>
      </section>
    );
  }
}
