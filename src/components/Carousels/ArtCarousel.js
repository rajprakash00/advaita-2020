import React, { Component } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bhag from "../../img/ArtFinal/Bhag.png";
import collart from "../../img/ArtFinal/Coll.png";
import cray from "../../img/ArtFinal/Crayon.png";
import creative from "../../img/ArtFinal/Creative.png";
import photo from "../../img/ArtFinal/Exhiu.png";
import imagen from "../../img/ArtFinal/Imag.png";
import memo from "../../img/ArtFinal/Memo.png";
import picasso from "../../img/ArtFinal/Pic.png";
import photoGeek from "../../img/ArtFinal/PhotoGeek.png";
import pictio from "../../img/ArtFinal/Pictio.png";
import artBg from "../../img/backgrounds/ArtBg.jpg";

const images = [
  collart,
  photo,
  imagen,
  picasso,
  photoGeek,
  bhag,
  creative,
  cray,
  memo,
  pictio
];

const thumbnail = [
  <h1 className="thumb_name">CollArt</h1>,
  <h1 className="thumb_name">Photo Exhibition</h1>,
  <h1 className="thumb_name">Imagen</h1>,
  <h1 className="thumb_name">Picasso</h1>,
  <h1 className="thumb_name">Photo Geek</h1>,
  <h1 className="thumb_name">Bhaag Picasso Bhag</h1>,
  <h1 className="thumb_name">Making Things Creative</h1>,
  <h1 className="thumb_name">Crayon Scavenger Hunt</h1>,
  <h1 className="thumb_name">Finding Memo</h1>,
  <h1 className="thumb_name">Pictionary</h1>,
  <h1 className="thumb_name">CollArt</h1>,
  <h1 className="thumb_name">Photo Exhibition</h1>,
  <h1 className="thumb_name">Imagen</h1>,
  <h1 className="thumb_name">Picasso</h1>,
  <h1 className="thumb_name">Photo Geek</h1>,
  <h1 className="thumb_name">Bhaag Picasso Bhag</h1>,
  <h1 className="thumb_name">Making Things Creative</h1>,
  <h1 className="thumb_name">Crayon Scavenger Hunt</h1>,
  <h1 className="thumb_name">Finding Memo</h1>,
  <h1 className="thumb_name">Pictionary</h1>
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

      index = currentSlide + 2;
      while (index >= 18) {
        index = index - 10;
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
          <button className="thumb_slider" onClick={() => goToSlide(index - 4)}>
            {React.Children.toArray(thumbnail)[index - 2]}
          </button>
          <button className="thumb_slider" onClick={() => previous()}>
            {React.Children.toArray(thumbnail)[index - 1]}
          </button>
          <button
            className="thumb_slider zoom"
            style={{ backgroundColor: "#fdb688" }}
            onClick={() => goToSlide(index + 10)}
          >
            {React.Children.toArray(thumbnail)[index]}
          </button>
          <button className="thumb_slider" onClick={() => next()}>
            {React.Children.toArray(thumbnail)[index + 1]}
          </button>
          <button className="thumb_slider" onClick={() => goToSlide(index)}>
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
