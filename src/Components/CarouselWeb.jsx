
import '../public/css/carousel.css'
import imageCarrousel1 from '../public/images/random/TDW-55.jpg';
import imageCarrousel2 from '../public/images/random/TDW-60.jpg';
import imageCarrousel3 from '../public/images/random/TDW-69.jpg';
import imageCarrousel4 from '../public/images/random/WP.jpg';

import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
// import uuidv4 from "uuid";
import { config } from "react-spring";

function CarouselWeb (){
  
    const [state, setState] = useState({
      goToSlide: 0,
      offsetRadius: 2,
      showNavigation: true,
      config: config.gentle
    });
  
    let slides = [
      {
        content: <img src={imageCarrousel1}  alt="1" />
      },
      {
        content: <img src={imageCarrousel4} alt="2" />
      },
      {
        content: <img src={imageCarrousel3} alt="3" />
      },
      {
        content: <img src={imageCarrousel4} alt="4" />
      },
      {
        content: <img src={imageCarrousel1} alt="5" />
      },
      {
        content: <img src={imageCarrousel4} alt="6" />
      },
      {
        content: <img src={imageCarrousel3} alt="7" />
      },
      {
        content: <img src={imageCarrousel4} alt="8" />
      }
    ].map((slide, index) => {
      return { ...slide, onClick: () => setState({ goToSlide: index }) };
    });
  
    const onChangeInput = (e) => {
      setState({
        [e.target.name]: parseInt(e.target.value, 10) || 0
      });
    };
  
    let xDown = null;
    let yDown = null;
  
    const getTouches = (evt) => {
      return (
        evt.touches || evt.originalEvent.touches // browser API
      );
    };
  
    const handleTouchStart = (evt) => {
      const firstTouch = getTouches(evt)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
    };
  
    const handleTouchMove = (evt) => {
      if (!xDown || !yDown) {
        return;
      }
  
      let xUp = evt.touches[0].clientX;
      let yUp = evt.touches[0].clientY;
  
      let xDiff = xDown - xUp;
      let yDiff = yDown - yUp;
  
      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        /*most significant*/
        if (xDiff > 0) {
          /* left swipe */
          setState({ goToSlide: state.goToSlide + 1 });
        } else {
          /* right swipe */
          setState({ goToSlide: state.goToSlide - 1 });
        }
      } else {
        if (yDiff > 0) {
          /* up swipe */
        } else {
          /* down swipe */
        }
      }
      /* reset values */
      xDown = null;
      yDown = null;
    };
  
    return (
      <div
        style={{ width: "90%", height: "600px", margin: "0 auto", opacity: "0.9" }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <Carousel
          slides={slides}
          goToSlide={state.goToSlide}
          offsetRadius={state.offsetRadius}
          
          animationConfig={state.config}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "70%",
            display: "flex",
            justifyContent: "space-around",
            opacity: "0.8"
          }}
        ></div>
      </div>
  )}

  
 export default CarouselWeb
