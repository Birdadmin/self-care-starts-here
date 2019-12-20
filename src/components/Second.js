import React from 'react';
import LazyHero from 'react-lazy-hero';
import './Second.css'

function Second(props) {
  return (
    <div className="Second">
      <LazyHero  opacity="0" minHeight="600px"  parallaxOffset="0" imageSrc={ require('../images/silk-lotion-desktop.jpg') } className="hero-second" isCentered="true" >
      <div className="flex-container-second">
          <div className="mobile-image-second">
            <img src={ require('../images/silk-lotion-mobile.jpg')}/>
          </div>
          <div className="copy-second">
          <h1><span className="white">Explore lotions</span></h1> 
          <h1>& topicals.</h1>
          <button type="button" onClick={props.redirect} >Shop Now</button>
        </div>
      </div>  
      </LazyHero>
    </div>
  );
}

export default Second;
