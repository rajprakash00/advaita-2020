import React, { Component } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import collart from "../../img/ArtFinal/Coll.png";
import photo from "../../img/ArtFinal/Exhiu.png";
import imagen from "../../img/ArtFinal/Imag.png";
import picasso from "../../img/ArtFinal/Pic.png";
import photoGeek from "../../img/ArtFinal/PhotoGeek.png";
import artBg from "../../img/backgrounds/ArtBg.jpg";

const images = [collart, photo, imagen, picasso, photoGeek];

const thumbnail = [
  <h1 className="thumb_name">CollArt</h1>,
  <h1 className="thumb_name">Photo Exhibition</h1>,
  <h1 className="thumb_name">Imagen</h1>,
  <h1 className="thumb_name">Picasso</h1>,
  <h1 className="thumb_name">Photo Geek</h1>,
  <h1 className="thumb_name">CollArt</h1>,
  <h1 className="thumb_name">Photo Exhibition</h1>,
  <h1 className="thumb_name">Imagen</h1>,
  <h1 className="thumb_name">Picasso</h1>,
  <h1 className="thumb_name">Photo Geek</h1>
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

export default class ArtCarousel extends Component {
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
      while (index >= 7) {
        index = index - 5;
      }

      if (window.innerWidth <= 992 && window.innerWidth >= 576) {
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
      index = index + 3;
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
        style={{ backgroundImage: `url(${artBg})` }}
      >
        <h1>Art & Photography Events</h1>
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
              <Link key={i} to={`/event/art/${i + 1}`}>
                <img src={card} className="slide_card" alt="art card" />
              </Link>
            );
          })}
        </Carousel>
      </section>
    );
  }
}
