import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero'; 
import Boxes from './Boxes'; 
import Render from './Render';

// Define the Landing component as a functional component
const Landing = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      {/* Include the Navbar component */}
      <Navbar />

      {/* Include the Hero component */}
      <Hero />


      {/* Assuming Boxes component handles displaying multiple boxes */}
      <Render />
    </div>
  );
};

export default Landing;
