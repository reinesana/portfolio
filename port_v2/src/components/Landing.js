import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Render from './Render';
import MyInfo from './my_info';

const Landing = () => {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflowX: 'hidden',
      overflowY: 'scroll',
      scrollSnapType: 'y mandatory',
    }}>
      
      <div id="hero-section" style={{ height: '100vh', scrollSnapAlign: 'start' }}>
        <Hero />
      </div>
      <div id="about-section" style={{ height: '100vh', scrollSnapAlign: 'start' }}>
        <MyInfo />
      </div>
      <div id="projects-section" style={{ height: '100vh', scrollSnapAlign: 'start' }}>
        <Render />
      </div>

    </div>
  );
};

export default Landing;
