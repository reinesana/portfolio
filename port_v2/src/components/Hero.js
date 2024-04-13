import React, { useEffect, useRef } from 'react';
import './Hero.css'; 
import heroImage from './images/hero_image.png'; // Adjust the path as necessary
import heroContainer from './images/hero_container.png'; // Adjust the path as necessary

function Hero() {
  const tiltRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const tilt = tiltRef.current;
    if (tilt) {
      const handleMouseMove = (e) => {
        const rect = tilt.getBoundingClientRect();
        const x = (e.clientX || e.touches[0].clientX) - rect.left - (rect.width / 2);
        const y = (e.clientY || e.touches[0].clientY) - rect.top - (rect.height / 2);
        const multiplier = 0.07;

        const xRotate = (y / rect.height) * multiplier * 180;
        const yRotate = -(x / rect.width) * multiplier * 180;

        tilt.style.transform = `perspective(1000px) rotateX(${xRotate}deg) rotateY(${yRotate}deg) scale(1.1)`;
      };

      tilt.addEventListener('mousemove', handleMouseMove);
      tilt.addEventListener('touchmove', handleMouseMove);

      return () => {
        tilt.removeEventListener('mousemove', handleMouseMove);
        tilt.removeEventListener('touchmove', handleMouseMove);
      };
    }
  }, []);

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
      }, 15);
    };

    const heading = headingRef.current;
    if (heading) {
      heading.addEventListener('mouseover', animateText);
      heading.addEventListener('touchstart', animateText);
    }

    return () => {
      if (heading) {
        heading.removeEventListener('mouseover', animateText);
        heading.removeEventListener('touchstart', animateText);
      }
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="hero-container">
      <div className="tilt-container" ref={tiltRef}>
        <div className="tilt-background" style={{ backgroundImage: `url(${heroImage})` }}></div>
      </div>

      <img src={heroContainer} alt="hero-box" />
      <div className="hero-text">
        <h1>Welcome to Shana's interactive, 3D portfolio. Hover around to interact with the pictures and the text to enhance your experience. Happy viewing 💫</h1>
      </div>

      <div className="content">
        <div className="animated-hero">
          <h1>SHANA</h1>
          <h3>NURSOO</h3>
          <h2 ref={headingRef} data-value="PORTFOLIO.">HOVER HERE</h2>
        </div>
      </div>

    </div>
  );
}

export default Hero;
