import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

import "react-multi-carousel/lib/styles.css";
import Cypher from "../img/CultFinal/Cypher.png";
import Joker from "../img/CultFinal/Joker.png";
import Foot from "../img/CultFinal/Foot.png";
import Card from "../img/CultFinal/Card.png";
import Lamode from "../img/CultFinal/Lamode.png";
import HaqSe from "../img/CultFinal/HaqSe.png";
import Rock from "../img/CultFinal/Rock.png";
import cult from "../img/backgrounds/CultBg.jpg";

const images = [Cypher, Joker, Foot, Card, Lamode, HaqSe, Rock];

const thumbnail = [
  <h1 className="thumb_name">Cypher</h1>,
  <h1 className="thumb_name">Joker</h1>,
  <h1 className="thumb_name">Foot</h1>,
  <h1 className="thumb_name">Acoustica</h1>,
  <h1 className="thumb_name">Lamode</h1>,
  <h1 className="thumb_name">HaqSe</h1>,
  <h1 className="thumb_name">Rock</h1>,
  <h1 className="thumb_name">Cypher</h1>,
  <h1 className="thumb_name">Joker</h1>,
  <h1 className="thumb_name">Foot</h1>,
  <h1 className="thumb_name">Acoustica</h1>,
  <h1 className="thumb_name">Lamode</h1>,
  <h1 className="thumb_name">HaqSe</h1>,
  <h1 className="thumb_name">Rock</h1>
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 5,
    partialVisibilityGutter: 40 // this is optional if you are not using partialVisible props
  },
  tablet: {
    breakpoint: { max: 992, min: 576 },
    items: 3,
    partialVisibilityGutter: 30 // this is optional if you are not using partialVisible props
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 1,
    partialVisibilityGutter: 30 // this is optional if you are not using partialVisible props
  }
};

export default class SubEvent extends Component {
  render() {
    let index;
    const CustomButtonGroup = ({
      next,
      previous,
      goToSlide,
      carouselState
    }) => {
      const { totalItems, currentSlide } = carouselState;

      index = currentSlide + 2;
      while (index >= 9) {
        index = index - 7;
      }

      console.log(currentSlide, index);

      if (window.innerWidth <= 992 && window.innerWidth >= 576) {
        index = index;
        return (
          <div className="custom-button-group">
            <button className="thumb_slider" onClick={() => previous()}>
              {React.Children.toArray(thumbnail)[index - 1]}
            </button>
            <button
              className="thumb_slider zoom"
              onClick={() => goToSlide(index)}
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
        index = index + 3;
        return (
          <div className="custom-button-group">
            <button className="thumb_slider" onClick={() => previous()}>
              {React.Children.toArray(thumbnail)[index - 1]}
            </button>
            <button
              className="thumb_slider zoom"
              onClick={() => goToSlide(index)}
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
          <button className="thumb_slider" onClick={() => goToSlide(index - 2)}>
            {React.Children.toArray(thumbnail)[index - 2]}{" "}
          </button>
          <button className="thumb_slider" onClick={() => previous()}>
            {React.Children.toArray(thumbnail)[index - 1]}
          </button>
          <button
            className="thumb_slider zoom"
            onClick={() => goToSlide(index)}
          >
            {React.Children.toArray(thumbnail)[index]}
          </button>
          <button className="thumb_slider" onClick={() => next()}>
            {React.Children.toArray(thumbnail)[index + 1]}
          </button>
          <button className="thumb_slider" onClick={() => goToSlide(index + 2)}>
            {React.Children.toArray(thumbnail)[index + 2]}{" "}
          </button>
        </div>
      );
    };
    /*  const CustomDot = ({
      index,
      onClick,
      active,
      carouselState: { currentSlide }
    }) => {
      
      return (
        <button
          onClick={e => {
            onClick();
            
            e.preventDefault();

          }}
          className={classNames("custom-dot", {
            "custom-dot--active": active
          })}
        >
          {index}
        </button>
      );
        };*/

    return (
      <div
        className="container_event"
        style={{ backgroundImage: `url(${cult})` }}
      >
        <h1>GAMEX</h1>
        <Carousel
          focusOnSelect={false}
          arrows={false}
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
              <Link to={`/cult/${i + 1}`}>
                <img src={card} alt="cult card" className="slide_card" />
              </Link>
            );
          })}
        </Carousel>
      </div>
    );
  }
}
