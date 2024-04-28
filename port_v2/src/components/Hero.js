import React, { useEffect, useRef } from 'react';
import './Hero.css'; 
import heroImage from './images/hero_image.png';
import heroContainer from './images/hero_container.svg';

function Hero() {
  const tiltRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const tilt = tiltRef.current;
    if (!tilt) return;

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
  }, []);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    let interval;

    const animateText = (event) => {
      let iteration = 0;
      clearInterval(interval);

      interval = setInterval(() => {
        const targetText = event.target.getAttribute('data-value') || "";
        event.target.innerText = targetText
          .split("")
          .map((char, index) => index < iteration ? targetText[index] : "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)])
          .join("");

        if (iteration >= targetText.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 15);
    };

    heading.addEventListener('mouseover', animateText);
    heading.addEventListener('touchstart', animateText);

    return () => {
      heading.removeEventListener('mouseover', animateText);
      heading.removeEventListener('touchstart', animateText);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="hero-container">
      <div className="tilt-container" ref={tiltRef}>
        <div className="tilt-background" style={{ backgroundImage: `url(${heroImage})` }}></div>
      </div>
      <div className="heroLine">
        <img src={heroContainer} alt="hero-box" />
      </div>
      <div className="hero-text">
        <h1>Welcome to Shana's interactive, 3D portfolio. Hover around to interact with the pictures and the text to enhance your experience. Happy viewing 💫</h1>
      </div>
      
      <div className="animated-hero">
          <h1>SHANA</h1>
          <h3>NURSOO</h3>
          <h2 ref={headingRef} data-value="PORTFOLIO.">HOVER</h2>
      </div>

      
    </div>
  );
}

export default Hero;
