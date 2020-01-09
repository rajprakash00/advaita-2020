import React from "react";
import Tilt from "react-parallax-tilt";
import { FaTwitterSquare, FaFacebookSquare, FaInstagram } from "react-icons/fa";

const TeamCard = props => {
  return (
    <Tilt
      className="tilt-element"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={800}
      scale={1}
      gyroscope
    >
      <div className="tilt-content">
        <img src={require(`./../img/Team/${props.img}`)} alt={props.name} />
        <h2>{props.name}</h2>
        <h3>{props.des}</h3>
        <h3>{props.number}</h3>
        <div className="social-icons">
          {props.fb ? (
            <a href={props.fb} target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare />
            </a>
          ) : null}
          {props.insta ? (
            <a href={props.insta} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          ) : null}
          {props.tweet ? (
            <a href={props.tweet} target="_blank" rel="noopener noreferrer">
              <FaTwitterSquare />
            </a>
          ) : null}
        </div>
      </div>
    </Tilt>
  );
};

export default TeamCard;
