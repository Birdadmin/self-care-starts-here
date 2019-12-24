import React from 'react';
import LazyHero from 'react-lazy-hero';
import './Second.css'

function Second(props) {
  return (
    <div className="Second">
      <LazyHero  opacity="1" minHeight="600px"  parallaxOffset="0" color="#ec5c44" className="hero-second" isCentered="true" >
      <div className="flex-container-second">
          <div className="silk-mobile">
            <img src={ require('../images/silk.png')}/>
          </div>
          <div className="silk">
            <img src={ require('../images/silk.png') }/>
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
