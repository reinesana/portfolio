import React from 'react';
import './Hero.css'; 

function Hero() {
  return (
    <div className="hero-container">
      <h1>Hi, I'm Your Name</h1>
      <p>I'm a [Your Profession/Title]</p>
      <a href="#projects" className="hero-btn">View My Work</a>
    </div>
  );
}

export default Hero;
