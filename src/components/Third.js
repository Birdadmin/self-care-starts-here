import React from 'react';
import LazyHero from 'react-lazy-hero';
import './Third.css'

function bCorp(props) {
  return (
    <div className="bCorp">
      <LazyHero  opacity="0" minHeight="700px" opacity="1" parallaxOffset="0" color='#00a6d4' className="hero-bCorp" isCentered="true" >
        <div className="flex-container-bCorp">
          <div className="essential-mobile">
            <img src={ require('../images/essential.png') }/>
          </div>
          <div className="essential">
            <img src={ require('../images/essential.png') }/>
          </div>
          <div className="copy-bCorp">
              <h1><span className="white">Bluebird</span> is on </h1>
              <h1>a mission.</h1> 
            <button type="button" onClick={props.redirect} >Shop Now</button>
          </div>
          <div className="logo-bCorp">
              <img src={ require('../images/bCorp-logo-S.png') }/>
          </div>
        </div>  
      </LazyHero>
    </div>
  );
}
export default bCorp;