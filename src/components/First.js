import React from 'react';
import LazyHero from 'react-lazy-hero';
import './First.css'

function First(props) {
  return (
    <div className="First">
      <LazyHero  opacity="1" minHeight="600px"  parallaxOffset="0" color="#ff7f0f" className="hero-first" isCentered="true" >
      <div className="flex-container-first">
          <div className="sport-mobile">
            <img src={ require('../images/sport.png')}/>
          </div>
          <div className="sport">
            <img src={ require('../images/sport.png') }/>
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
