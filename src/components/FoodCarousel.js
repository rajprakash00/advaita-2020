import React, { Component } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cake from "../img/FoodFinal/Cake.png";
import gol from "../img/FoodFinal/Gol.png";
import maggie from "../img/FoodFinal/Maggie.png";
import food from "../img/backgrounds/FoodBg.jpg";
import shole from "../img/FoodFinal/Shole.png";
import string from "../img/FoodFinal/String.png";
import trait from "../img/FoodFinal/Trait.png"

const images = [cake, gol, maggie,shole,string,trait];

const thumbnail = [
  <h1 className="thumb_name">cake</h1>,
  <h1 className="thumb_name">golgappa</h1>,
  <h1 className="thumb_name">maggie</h1>,
  <h1 className="thumb_name">shole</h1>,
  <h1 className="thumb_name">string</h1>,
  <h1 className="thumb_name">trait</h1>,
  <h1 className="thumb_name">cake</h1>,
  <h1 className="thumb_name">golgappa</h1>,
  <h1 className="thumb_name">maggie</h1>,
  <h1 className="thumb_name">shole</h1>,
  <h1 className="thumb_name">string</h1>,
  <h1 className="thumb_name">trait</h1>
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
      while (index >= 8) {
        index = index - 6;
      }

      if (window.innerWidth <= 992 && window.innerWidth >= 576) {
        index = index -1;
        return (
          <div className="custom-button-group">
            <button className="thumb_slider" onClick={() => previous()}>
              {React.Children.toArray(thumbnail)[index - 1]}
            </button>
            <button className="thumb_slider zoom">
              {React.Children.toArray(thumbnail)[index]}
            </button>
            <button className="thumb_slider" onClick={() => next()}>
              {React.Children.toArray(thumbnail)[index + 1]}
            </button>
          </div>
        );
      }

      if (window.innerWidth <= 576) {
        index=index+2
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
        style={{ backgroundImage: `url(${food})` }}
      >
        <h1>Food Events</h1>
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
                <img src={card} className="slide_card" alt="food card" />
              </Link>
            );
          })}
        </Carousel>
      </section>
    );
  }
}
