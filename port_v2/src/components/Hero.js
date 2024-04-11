import React, { useEffect, useRef } from 'react';
import './Hero.css'; 
import heroImage from '/Users/shanakesia/Desktop/CMPT/projects/portfolio/port_v2/src/components/images/hero_image.png';
import heroContainer from '/Users/shanakesia/Desktop/CMPT/projects/portfolio/port_v2/src/components/images/hero_container.png';


function Hero() {
  const tiltRef = useRef(null); // Ref for the tilt background
  const headingRef = useRef(null); // Ref for the animated text

  const tiltMove = (x, y) => {
    const boundedX = Math.max(Math.min(x, 10), -10); // Limit the maximum tilt angles to 10 degrees
    const boundedY = Math.max(Math.min(y, 10), -10);
    return `perspective(1000px) rotateX(${boundedX}deg) rotateY(${boundedY}deg) scale(1.1)`;
  };

  useEffect(() => {
    const tilt = tiltRef.current;
    if (tilt) {
      const handleMouseMove = (e) => {
        const rect = tilt.getBoundingClientRect();
        const x = e.clientX - rect.left - (rect.width / 2);
        const y = e.clientY - rect.top - (rect.height / 2);
        const multiplier = 0.05; // Controls the tilt sensitivity

        const xRotate = (y / rect.height) * multiplier * 180;
        const yRotate = -(x / rect.width) * multiplier * 180;

        tilt.style.transform = tiltMove(xRotate, yRotate);
      };

      tilt.addEventListener('mousemove', handleMouseMove);

      return () => {
        tilt.removeEventListener('mousemove', handleMouseMove);
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
    }

    return () => {
      if (heading) {
        heading.removeEventListener(animateText);
      }
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="hero-container">
      <div className="tilt-container" ref={tiltRef}>
        <div className="tilt-background" style={{ backgroundImage: `url(${heroImage})` }}></div>
      </div>

      <img src={heroContainer} alt="hero-container" />

      <div className="content">
        <div className="animated-text">
          <h1 ref={headingRef} data-value="WELCOME TO SHANA'S PORTFOLIO">WELCOME TO SHANA'S PORTFOLIO</h1>
        </div>
      </div>

    </div>
  );
}

export default Hero;
