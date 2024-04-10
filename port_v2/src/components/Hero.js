import React, { useEffect, useRef } from 'react';
import './Hero.css'; 
import leftImage from '/Users/shanakesia/Desktop/CMPT/projects/portfolio/port_v2/src/components/images/left_image.png';
import rightImage from '/Users/shanakesia/Desktop/CMPT/projects/portfolio/port_v2/src/components/images/right_image.png';

function Hero() {
  const headingRef = useRef(null); // Create a ref for the animated text

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    const animateText = (event) => {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        const targetText = event.target.getAttribute('data-value') || "";
        event.target.innerText = targetText
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return targetText[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= targetText.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 20);
    };

    // Attach the event listener
    const heading = headingRef.current;
    if (heading) {
      heading.addEventListener('mouseover', animateText);
    }

    // Clean up the event listener
    return () => {
      if (heading) {
        heading.removeEventListener('mouseover', animateText);
      }
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="hero-container">
      <div className="animated-text">
        <h1 ref={headingRef} data-value="WELCOME TO SHANA'S PORTFOLIO">CLICK HERE</h1>
      </div>


      <div className="left-image">
        <img src={leftImage} alt="Left"/>
      </div>

      <div className="right-image">
        <img src={rightImage} alt="Right"/>
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
