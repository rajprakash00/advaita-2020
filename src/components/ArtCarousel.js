import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import collart from '../img/ArtFinal/Coll.png';
import photo from '../img/ArtFinal/Exhiu.png';
import imagen from '../img/ArtFinal/Imag.png';
import picasso from '../img/ArtFinal/Pic.png';

const images=[
    collart,
    photo,
    imagen,
    picasso
    ]
    
const thumbnail=[

    <h1 className="thumb_name">COLLART</h1>,
    <h1 className="thumb_name">PHOTO</h1>,
    <h1 className="thumb_name">IMAGEN</h1>,
    <h1 className="thumb_name">PICASSO</h1>,   
    <h1 className="thumb_name">COLLART</h1>,
    <h1 className="thumb_name">PHOTO</h1>,
    <h1 className="thumb_name">IMAGEN</h1>,
    <h1 className="thumb_name">PICASSO</h1>,    
    
    
    ]

    const responsive={
        desktop: {
          breakpoint: { max: 3000, min: 992 },
          items: 2,
          partialVisibilityGutter: 40, // this is optional if you are not using partialVisible props
        },
        tablet: {
          breakpoint: { max: 992, min: 576 },
          items: 2,
          partialVisibilityGutter: 30, // this is optional if you are not using partialVisible props
        },
        mobile: {
          breakpoint: { max: 576, min: 0 },
          items: 1,
          partialVisibilityGutter: 30, // this is optional if you are not using partialVisible props
      },
      }

export default class ArtCarousel extends Component {
    render() {
        let index;
        const CustomButtonGroup = ({ next, previous, goToSlide, carouselState}) => {
            const { totalItems, currentSlide } = carouselState;
              
            index=currentSlide+4
            while (index>=6){
              index=index-4
            }
            console.log(currentSlide,index)
            if(window.innerWidth <= 576){
              index=index -2
              /*while(index>=2)
              {index=index-2}*/
              return (
                <div className="custom-button-group">
                
                <button className="thumb_slider" onClick={() => previous()} >{React.Children.toArray(thumbnail)[index-1]}</button>

                <button className="thumb_slider" onClick={() => goToSlide(index)} >{React.Children.toArray(thumbnail)[index]}</button>
           
                <button className="thumb_slider" onClick={() => next()}>{React.Children.toArray(thumbnail)[index+1]}</button>
             
                </div>
              );
            }

            return null;
        };
        return (
           <div className="container_eve_art">
     
                <h1>ART & PHOTOGRAPHY</h1>
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
                        <Link to={`/event/art/${i+1}`}><img src={card} className="slide_card_two"  /></Link> 
                    
                    )
                    })
                }  
                </Carousel>
            </div>
        )
    }
}
