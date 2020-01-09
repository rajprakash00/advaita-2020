import React from "react";
import { Redirect } from "react-router-dom";
import data from "../events_new.json";

const toTitleCase = text =>
  text.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });

const EventDetails = props => {
  const { category, id } = props.match.params;
  const bgImg = require(`../img/backgrounds/${toTitleCase(category)}Bg.jpg`);
  const details = Object.values(data.categories[category]).filter(
    x => Object.values(x)[0].id === parseInt(id)
  )[0];
  if (details === undefined || details.length === 0) {
    return <Redirect to="/404" />;
  }

  const title = Object.keys(details)[0];
  const { description, rules, img_path } = Object.values(details)[0];
  return (
    <section
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover"
      }}
      className="event-detail-wrapper"
    >
      <h1>{toTitleCase(category)}</h1>
      <div className="event-card">
        <div className="event-img">
          <img
            src={require(`../img/${toTitleCase(
              category
            )}Final/${img_path}.png`)}
            alt={title}
          />
        </div>
        <div className="event-details">
          <div className="event-text">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className="event-buttons">
            <button>Rules</button>
            <button>Register</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
