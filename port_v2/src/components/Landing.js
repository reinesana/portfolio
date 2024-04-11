import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero'; 
import Boxes from './Boxes'; 
import Render from './Render';
import MyInfo from './my_info';

// Define the Landing component as a functional component
const Landing = () => {
  return (
    <div style={{ width: 'auto', height: 'auto'  }}>
      {/* Include the Navbar component */}
      <Navbar />


      {/* Include the Hero component */}
      <Hero />

      {}
      <MyInfo />


      {/* Assuming Boxes component handles displaying multiple boxes */}
      <Render />



    </div>
  );
};

export default Landing;
