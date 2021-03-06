import React from "react";
import { Redirect } from "react-router-dom";
import { TiChevronLeftOutline } from "react-icons/ti";
import data from "../events.json";

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
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
      }}
      className="event-detail-wrapper"
    >
      <h1>About Event</h1>
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
            <div className="description">
              {description.split("\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="event-buttons">
            {id === "1" && category === "tech" ? (
              <>
                <button onClick={() => window.open(`/assets/${rules}`)}>
                  Details
                </button>
                <button
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSfySQVkGukHTlbflpxbsg-DIMmf3zqJh4Jeewt0B7tcaUtvow/viewform?usp=sf_link"
                    )
                  }
                >
                  Register
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    rules !== "rules.pdf"
                      ? window.open(`/assets/${rules}`)
                      : alert("coming soon");
                  }}
                >
                  Rules
                </button>
                <button
                  onClick={() => {
                    props.history.push("/team-register");
                  }}
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <button className="go-back-button" onClick={() => props.history.goBack()}>
        <TiChevronLeftOutline />
        Go Back
      </button>
    </section>
  );
};

export default EventDetails;
