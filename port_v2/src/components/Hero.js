import React from 'react';
import './Hero.css'; 
import leftImage from '/Users/shanakesia/Desktop/CMPT/projects/portfolio/port_v2/src/components/images/left_image.png';
import rightImage from '/Users/shanakesia/Desktop/CMPT/projects/portfolio/port_v2/src/components/images/right_image.png'
function Hero() {
        
  return (
    <div className="hero-container">
      <div className="left-image">
        <img src={leftImage} alt='left-image'/>
      
      </div>

      <div className="right-image">
        
        
      </div>

      <div className="scroll" style={{ '--t': '20s' }}>
        <div>
          <span>SHANA</span>
          <span>SHANA</span>
          <span>SHANA</span>
          <span>SHANA</span>
          <span>SHANA</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
