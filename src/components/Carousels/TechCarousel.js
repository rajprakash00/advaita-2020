import React, { Component } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

import IEEE from "../../img/TechFinal/IEEE.png";
import SwigNCode from "../../img/TechFinal/SwigNCode.png";
import Princi from "../../img/TechFinal/Princi.png";
import Technova from "../../img/TechFinal/Technova.png";
import CTF from "../../img/TechFinal/CTF.png";
import WebD from "../../img/TechFinal/WebD.png";
import PaperP from "../../img/TechFinal/PaperP.png";
import Encoded from "../../img/TechFinal/Encoded.png";
import LineFol from "../../img/TechFinal/LineFol.png";
import Blueprint from "../../img/TechFinal/Blueprint.png";
import Dirt from "../../img/TechFinal/Dirt.png";
import Arduinoob from "../../img/TechFinal/Arduinoob.png";
import tech from "../../img/backgrounds/TechBg.jpg";

const images = [
  IEEE,
  SwigNCode,
  Princi,
  Technova,
  CTF,
  WebD,
  PaperP,
  Encoded,
  LineFol,
  Blueprint,
  Dirt,
  Arduinoob
];

const thumbnail = [
  <h1 className="thumb_name">IEEE Workshop</h1>,
  <h1 className="thumb_name">SwigNCode</h1>,
  <h1 className="thumb_name">Principium</h1>,
  <h1 className="thumb_name">Technova</h1>,
  <h1 className="thumb_name">CTF</h1>,
  <h1 className="thumb_name">WebD/AppD</h1>,
  <h1 className="thumb_name">PaperPresentation</h1>,
  <h1 className="thumb_name">Encoded</h1>,
  <h1 className="thumb_name">LineFollower</h1>,
  <h1 className="thumb_name">Blueprint</h1>,
  <h1 className="thumb_name">Dirt Rush</h1>,
  <h1 className="thumb_name">Arduinoob</h1>,
  <h1 className="thumb_name">IEEE Workshop</h1>,
  <h1 className="thumb_name">SwigNCode</h1>,
  <h1 className="thumb_name">Principium</h1>,
  <h1 className="thumb_name">Technova</h1>,
  <h1 className="thumb_name">CTF</h1>,
  <h1 className="thumb_name">WebD/AppD</h1>,
  <h1 className="thumb_name">PaperPresentation</h1>,
  <h1 className="thumb_name">Encoded</h1>,
  <h1 className="thumb_name">LineFollower</h1>,
  <h1 className="thumb_name">Blueprint</h1>,
  <h1 className="thumb_name">Dirt Rush</h1>,
  <h1 className="thumb_name">Arduinoob</h1>
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 5,
    partialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: { max: 992, min: 576 },
    items: 3,
    partialVisibilityGutter: 30
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 1,
    partialVisibilityGutter: 30
  }
};

export default class TechCarousel extends Component {
  render() {
    let index;
    const CustomButtonGroup = ({
      next,
      previous,
      goToSlide,
      carouselState
    }) => {
      const { currentSlide } = carouselState;

      index = currentSlide + 4;
      if (index >= 22) {
        index = index - 12;
      }
      if (index <= 1) {
        index = index + 12;
      }

      if (window.innerWidth <= 992 && window.innerWidth >= 576) {
        index = index + 3;
        return (
          <div className="custom-button-group">
            <button className="thumb_slider" onClick={() => previous()}>
              {React.Children.toArray(thumbnail)[index - 1]}
            </button>
            <button
              className="thumb_slider zoom"
              style={{ backgroundColor: "#fdb688" }}
            >
              {React.Children.toArray(thumbnail)[index]}
            </button>
            <button className="thumb_slider" onClick={() => next()}>
              {React.Children.toArray(thumbnail)[index + 1]}
            </button>
          </div>
        );
      }
      if (window.innerWidth <= 576) {
        index = index + 6;

        return (
          <div className="custom-button-group">
            <button className="thumb_slider" onClick={() => previous()}>
              {React.Children.toArray(thumbnail)[index - 1]}
            </button>
            <button
              className="thumb_slider zoom"
              style={{ backgroundColor: "#fdb688" }}
            >
              {React.Children.toArray(thumbnail)[index]}
            </button>
            <button className="thumb_slider" onClick={() => next()}>
              {React.Children.toArray(thumbnail)[index + 1]}
            </button>
          </div>
        );
      }
      return (
        <div className="custom-button-group">
          <button className="thumb_slider" onClick={() => goToSlide(index - 6)}>
            {React.Children.toArray(thumbnail)[index - 2]}
          </button>
          <button className="thumb_slider" onClick={() => previous()}>
            {React.Children.toArray(thumbnail)[index - 1]}
          </button>
          <button
            className="thumb_slider zoom"
            style={{ backgroundColor: "#fdb688" }}
            onClick={() => goToSlide(index + 8)}
          >
            {React.Children.toArray(thumbnail)[index]}
          </button>
          <button className="thumb_slider" onClick={() => next()}>
            {React.Children.toArray(thumbnail)[index + 1]}
          </button>
          <button className="thumb_slider" onClick={() => goToSlide(index - 2)}>
            {React.Children.toArray(thumbnail)[index + 2]}
          </button>
        </div>
      );
    };

    return (
      <section
        className="container_event"
        style={{ backgroundImage: `url(${tech})` }}
      >
        <h1>Technology Events</h1>
        <Carousel
          focusOnSelect={false}
          arrows={true}
          showDots={false}
          infinite={true}
          containerClass="container-padding-bottom"
          responsive={responsive}
          customButtonGroup={<CustomButtonGroup />}
          renderButtonGroupOutside={true}
          renderDotsOutside={false}
        >
          {images.map((card, i) => {
            return (
              <Link key={i} to={`/event/tech/${i + 1}`}>
                <img src={card} className="slide_card" alt="tech events" />
              </Link>
            );
          })}
        </Carousel>
      </section>
    );
  }
}
