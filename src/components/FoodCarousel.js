import React, { Component } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cake from "../img/FoodFinal/Cake.png";
import gol from "../img/FoodFinal/Gol.png";
import maggie from "../img/FoodFinal/Maggie.png";
import food from "../img/backgrounds/FoodBg.jpg";

const images = [cake, gol, maggie];

const thumbnail = [
  <h1 className="thumb_name">cake</h1>,
  <h1 className="thumb_name">golgappa</h1>,
  <h1 className="thumb_name">maggie</h1>,
  <h1 className="thumb_name">cake</h1>,
  <h1 className="thumb_name">golgappa</h1>,
  <h1 className="thumb_name">maggie</h1>
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 3,
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

export default class FoodCarousel extends Component {
  render() {
    let index;
    const CustomButtonGroup = ({
      next,
      previous,
      goToSlide,
      carouselState
    }) => {
      const { currentSlide } = carouselState;

      index = currentSlide + 2;
      while (index >= 5) {
        index = index - 3;
      }

      if (window.innerWidth <= 576) {
        index = currentSlide + 1;
        return (
          <div className="custom-button-group">
            <button className="thumb_slider" onClick={() => previous()}>
              {React.Children.toArray(thumbnail)[index - 1]}
            </button>
            <button className="thumb_slider" onClick={() => goToSlide(index)}>
              {React.Children.toArray(thumbnail)[index]}
            </button>
            <button className="thumb_slider" onClick={() => next()}>
              {React.Children.toArray(thumbnail)[index + 1]}
            </button>
          </div>
        );
      }

      return null;
    };
    return (
      <section
        className="container_event"
        style={{ backgroundImage: `url(${food})` }}
      >
        <h1>Food Fest</h1>
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
              <Link key={i} to={`/event/food/${i + 1}`}>
                <img src={card} className="slide_card_two" alt="food card" />
              </Link>
            );
          })}
        </Carousel>
      </section>
    );
  }
}
