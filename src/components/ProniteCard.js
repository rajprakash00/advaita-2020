import React from "react";

const ProniteCard = props => {
  return (
    <div className="pronite-card">
      <img src={props.img} alt={props.name} />
      <a href={props.link} className="pronite-button" download>
        Get E-Pass
      </a>
    </div>
  );
};

export default ProniteCard;
