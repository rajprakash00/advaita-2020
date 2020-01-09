import React, { Component } from 'react'
import data from '../events_new'
import {Link} from 'react-router-dom'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import Battlefield from '../img/Battlefield.png';
import SwigNCode from '../img/SwigNCode.png';
import Princi from '../img/Princi.png';
import Technova from '../img/Technova.png';
import CTF from '../img/CTF.png';
import WebD from '../img/WebD.png';
import PaperP from '../img/PaperP.png';
import Encoded from '../img/Encoded.png';
import LineFol from '../img/LineFol.png';
import Blueprint from '../img/Blueprint.png';
import Dirt from '../img/Dirt.png';
import Arduinoob from '../img/Arduinoob.png';
import tech from "../img/TechBG.jpg"

const images=[
  Battlefield,
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
Arduinoob,
]

const thumbnail=[
  <h1 className="thumb_name">Battlefield</h1>,
<h1 className="thumb_name">SwigNCode</h1>,
<h1 className="thumb_name">Princi</h1>,
<h1 className="thumb_name">Technova</h1>,
<h1 className="thumb_name">CTF</h1>,
<h1 className="thumb_name">WebD</h1>,
<h1 className="thumb_name">PaperP</h1>,
<h1 className="thumb_name">Encoded</h1>,
<h1 className="thumb_name">LineFol</h1>,
<h1 className="thumb_name">Blueprint</h1>,
<h1 className="thumb_name">Dirt</h1>,
<h1 className="thumb_name">Arduinoob</h1>,
<h1 className="thumb_name">Battlefield</h1>,
<h1 className="thumb_name">SwigNCode</h1>,
<h1 className="thumb_name">Princi</h1>,
<h1 className="thumb_name">Technova</h1>,
<h1 className="thumb_name">CTF</h1>,
<h1 className="thumb_name">WebD</h1>,
<h1 className="thumb_name">PaperP</h1>,
<h1 className="thumb_name">Encoded</h1>,
<h1 className="thumb_name">LineFol</h1>,
<h1 className="thumb_name">Blueprint</h1>,
<h1 className="thumb_name">Dirt</h1>,
<h1 className="thumb_name">Arduinoob</h1>,
]

const responsive={
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 5,
    partialVisibilityGutter: 40, // this is optional if you are not using partialVisible props
  },
  tablet: {
    breakpoint: { max: 992, min: 576 },
    items: 3,
    partialVisibilityGutter: 30, // this is optional if you are not using partialVisible props
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 1,
    partialVisibilityGutter: 30, // this is optional if you are not using partialVisible props
},
}



export default class SubEvent extends Component {
 
  

  render() {
    //const {category} = this.props.match.params
    //console.log(category)
    //console.log(Object.values(data.categories[category])[0].bg);
    let index;
    const CustomButtonGroup = ({ next, previous, goToSlide, carouselState}) => {
      const { totalItems, currentSlide } = carouselState;
 
      
    
      index=currentSlide+4
      while (index>=14){
        index=index-12
      }

      console.log(currentSlide,index)

      if(window.innerWidth <= 992 && window.innerWidth >= 576){
        index=index+3
        return (
          <div className="custom-button-group">
          <button className="thumb_slider" onClick={() => previous()} >{React.Children.toArray(thumbnail)[index-1]}</button>
      <button
        className="thumb_slider zoom" onClick={() => goToSlide(index)}
      >
     {React.Children.toArray(thumbnail)[index]} 
</button>
<button className="thumb_slider" onClick={() => next()}>{React.Children.toArray(thumbnail)[index+1]}</button>
       
          </div>
        );
      }
      if(window.innerWidth <= 576){
        index=index+6
                return (
          <div className="custom-button-group">
         
          <button className="thumb_slider" onClick={() => previous()} >{React.Children.toArray(thumbnail)[index-1]}</button>
      <button
        className="thumb_slider zoom" onClick={() => goToSlide(index)}
      >
     {React.Children.toArray(thumbnail)[index]} 
</button>
<button className="thumb_slider" onClick={() => next()}>{React.Children.toArray(thumbnail)[index+1]}</button>
       
          </div>
        );
      }

      return (
        <div className="custom-button-group">
       
      <button className="thumb_slider" onClick={() => goToSlide(index-2)}>{React.Children.toArray(thumbnail)[index-2]} </button>
      <button className="thumb_slider" onClick={() => previous()} >{React.Children.toArray(thumbnail)[index-1]}</button>
      <button
        className="thumb_slider zoom" onClick={() => goToSlide(index)}
      >
     {React.Children.toArray(thumbnail)[index]} 
</button>
<button className="thumb_slider" onClick={() => next()}>{React.Children.toArray(thumbnail)[index+1]}</button>
      <button className="thumb_slider" onClick={() => goToSlide(index+2)}>{React.Children.toArray(thumbnail)[index+2]} </button>
        </div>
      );
    };
   
    return (
      <div className="container_event" style={{backgroundImage:`url(${tech})`}}>
     
        <h1>TECH </h1>
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
            
          {
            images.map((card,i) =>{
              return (
               <Link to={`/event/tech/${i+1}`}><img src={card} className="slide_card"  /></Link> 
              
              )
            })
          }  
        </Carousel>
      </div>
    )
  }
}

