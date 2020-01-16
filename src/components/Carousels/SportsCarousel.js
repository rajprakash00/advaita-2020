import React, { Component } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import csgo from "../../img/SportsFinal/CSGO.png";
import fifa from "../../img/SportsFinal/FIFA.png";
import game from "../../img/backgrounds/SportsBg.jpg";
import basketball from "../../img/SportsFinal/Basket.png";
import chess from "../../img/SportsFinal/Chess.png";
import six from "../../img/SportsFinal/Six.png";
import football from "../../img/SportsFinal/Football.png";

const images = [csgo, fifa, basketball, chess, six, football];

const thumbnail = [
  <h1 className="thumb_name">CSGO</h1>,
  <h1 className="thumb_name">FIFA</h1>,
  <h1 className="thumb_name">Basketball</h1>,
  <h1 className="thumb_name">Chess</h1>,
  <h1 className="thumb_name">Super Six</h1>,
  <h1 className="thumb_name">Football</h1>,
  <h1 className="thumb_name">CSGO</h1>,
  <h1 className="thumb_name">FIFA</h1>,
  <h1 className="thumb_name">Basketball</h1>,
  <h1 className="thumb_name">Chess</h1>,
  <h1 className="thumb_name">Super Six</h1>,
  <h1 className="thumb_name">Football</h1>
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

export default class SportsCarousel extends Component {
  render() {
    let index;
    const CustomButtonGroup = ({
      next,
      previous,
      goToSlide,
      carouselState
    }) => {
      const { currentSlide } = carouselState;
      index = currentSlide + 9;
      if (index >= 9) {
        index = index - 7;
      }
      if (index <= 1) {
        index = index + 7;
      }

      if (window.innerWidth <= 992 && window.innerWidth >= 576) {
        index = index - 7;
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
        index = index + 2;

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
        style={{ backgroundImage: `url(${game})` }}
      >
        <h1>Sports & GameX Events</h1>
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
              <Link key={i} to={`/event/sports/${i + 1}`}>
                <img src={card} className="slide_card" alt="game card" />
              </Link>
            );
          })}
        </Carousel>
      </section>
    );
  }
}
