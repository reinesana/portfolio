import React, { useState } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri'; 
import vg5000 from './fonts/anta/Anta/Anta-Regular.ttf';

const Boxes = ({ image, tag_image, title, box, githubLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    borderRadius: '15px',
    overflow: 'hidden',
    marginTop: '0px',
    marginBottom: '0px',
    width: isHovered ? '22%' : '15%',
    transition: 'all 0.3s ease-in-out',
    height: '470px',
    bottom: '81vh',
    left: '8vh',
    top: '3vh',
    position: 'relative', 
    cursor: 'pointer', 
  };

  // Inline styles for other elements
  const overlayStyle = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '60%',
    opacity: '0.8',
    zIndex: '2',
    background: 'linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)',
  };

  const topOverlayStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '40%',
    opacity: isHovered ? '0.60' : '0.38',
    zIndex: '2',
    background: 'linear-gradient(180deg, rgba(18, 20, 44, 1) 0%, rgba(18, 20, 44, 0) 100%)',
  };

  const imageTagStyle = {
    display: isHovered ? 'block' : 'none',
    position: 'absolute',
    top: '0',
    left: '0',
    padding: '1rem',
    opacity: '0.8',
    zIndex: '3',
  };

  const contentBoxStyle = {
    padding: '0',
    height: '100%',
    width: '100%',
    position: 'relative',
  };

  const textStyle = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    padding: '1rem',
    color: 'white',
    zIndex: '3',
  };

  const buttonStyle = {
    marginTop: '0.7rem',
    fontSize: '9px',
    fontFamily: 'anta',
    backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.51)',
    color: isHovered ? 'black' : 'white', // Assuming default button text color
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem 1rem',
    borderRadius: '50px',
    textDecoration: 'none'
    
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={overlayStyle}></div>
      <div style={topOverlayStyle}></div>
      <img src={tag_image} alt="tag image" width="55%" style={imageTagStyle} />
      <div style={contentBoxStyle}>
        <img
          src={image}
          alt="Image description" // Use a more descriptive alt text
          style={{
            height: '100%',
            borderRadius: '8px',
            objectFit: 'cover',
            width: '100%',
          }}
        />
        <div style={textStyle}>
          <h2 style={{ fontSize: '25px', lineHeight: '1em', marginBottom: '0.7rem', fontFamily: 'anta' }}>{title}</h2>
          <p style={{ margin: '0 0 0.5rem 0', fontSize: '11px', marginBottom: '1rem', fontFamily: 'vg5000' }}>
            {box}
          </p>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <button style={buttonStyle}>
            gitHub
            <RiArrowRightSLine style={{ width: '20px', height: '18px', marginLeft: '0.1rem' }} />
          </button>
        </a>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
