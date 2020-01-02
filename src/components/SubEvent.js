import React, { Component } from 'react'
import data from '../eventdb'
import {Link} from 'react-router-dom'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';

/*import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images=[
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail:"https://picsum.photos/id/1018/1000/600/"
  },
  {
    original:"https://picsum.photos/id/1015/1000/600/",
    thumbnail:"https://picsum.photos/id/1015/1000/600/"
  },
  {
    original:"https://picsum.photos/id/1019/1000/600/",
    thumbnail:"https://picsum.photos/id/1019/1000/600/"
  },
  {
    original:"https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/1.jpg",
    thumbnail:"https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/1.jpg"
  }
]
export default class Event extends Component {
    render() {
        return (
            <div className="container_event">
                
              <section className="sliders" >
                <ImageGallery items={images} 
                  additionalClass="newapp" 
                  thumbnailPosition="top" 
                  showPlayButton={false} 
                  showFullscreenButton={false} 
                  showNav={false} />
              </section>  
                
            </div>
        )
    }
}*/

const images=[
  "https://picsum.photos/id/1018/1000/600/",
  "https://picsum.photos/id/1015/1000/600/",
  "https://picsum.photos/id/1019/1000/600/",
  "https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/1.jpg",
  "https://picsum.photos/id/1019/1000/600/",
  "https://picsum.photos/id/1015/1000/600/",  
]

/*const dataset= Array(4)
    .fill(0)
    .map((item,index) =>{
      return{
        image:images[index]
      }
    });*/

const responsive={
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40, // this is optional if you are not using partialVisible props
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30, // this is optional if you are not using partialVisible props
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    partialVisibilityGutter: 30, // this is optional if you are not using partialVisible props
},
}

export default class SubEvent extends Component {
  render() {
    return (
      <div className="container_event">
      <Link style={{color:"red"}} to="/">Home</Link>
        <h1>GAMEX</h1>
        <Carousel 
            focusOnSelect
            arrows={false}
            showDots
            infinite
            containerClass="container-padding-bottom"
            responsive={responsive}
             >
            
          {
            images.map(card =>{
              return (
                <img src={card} className="slide_card"  />
              )
            })
          }  
        </Carousel>
      </div>
    )
  }
}

