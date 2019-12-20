import React from 'react';
import LazyHero from 'react-lazy-hero';
import './First.css'

function First(props) {
  return (
    <div className="First">
      <LazyHero  opacity="0" minHeight="600px"  parallaxOffset="0" imageSrc={ require('../images/sport-lotion-desktop-left.jpg') } className="hero-first" isCentered="true" >
      <div className="flex-container-first">
          <div className="mobile-image-first">
            <img src={ require('../images/sport-lotion-mobile.jpg')}/>
          </div>
          <div className="copy-first">
          <h1><span className="white">Self-care</span></h1> 
          <h1>starts here.</h1>
          <button type="button" onClick={props.redirect} >Shop Now</button>
        </div>
      </div>  
      </LazyHero>
    </div>
  );
}

export default First;
