import React, { useState } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri'; 

const Boxes = ({ image, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    borderRadius: '15px',
    overflow: 'hidden',
    marginTop: '15px',
    width: isHovered ? '23%' : '18%',
    transition: 'all 0.3s ease-in-out',
    height: '450px',
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
    marginTop: '0.5rem',
    backgroundColor: isHovered ? 'yellow' : 'white',
    color: isHovered ? 'black' : 'blue', // Assuming default button text color
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem 1rem',
    borderRadius: '50px',
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={overlayStyle}></div>
      <div style={topOverlayStyle}></div>
      <img src="/images/yeelowtags.png" alt="" style={imageTagStyle} />
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
          <h2 style={{ fontSize: '20px', lineHeight: '1em', marginBottom: '1rem' }}>{title}</h2>
          <p style={{ margin: '0 0 0.5rem 0' }}>
            box
          </p>
          <button style={buttonStyle}>
            Get Started
            <RiArrowRightSLine style={{ width: '20px', height: '20px', marginLeft: '0.5rem' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
