import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Render from './Render';
import MyInfo from './my_info';

const Landing = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Your logic here, e.g., check scroll position and adjust UI accordingly
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflowX: 'hidden',
      overflowY: 'scroll',
      scrollSnapType: 'y mandatory',
    }}>
      <Navbar />
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
