import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Render from './Render'; // Correcting the component name from Boxes to Render
import MyInfo from './my_info';

const Landing = () => {
  return (
    <div style={{
      width: '100vw',   // This ensures the div takes the full viewport width
      height: '100vh',  // This ensures the div takes the full viewport height
      overflowX: 'hidden', // This prevents horizontal scrolling
      overflowY: 'scroll', // This allows vertical scrolling
      scrollSnapType: 'y mandatory', // This enables vertical scroll snapping
    }}>
      <Navbar />  {/* Assuming Navbar is outside the snapping flow and doesn't affect container width */}

      <div style={{ height: '100vh', scrollSnapAlign: 'start' }}>
        <Hero />
      </div>

      <div style={{ height: '100vh', scrollSnapAlign: 'start' }}>
        <MyInfo />
      </div>

      <div style={{ height: '100vh', scrollSnapAlign: 'start' }}>
        <Render />
      </div>
    </div>
  );
};

export default Landing;
