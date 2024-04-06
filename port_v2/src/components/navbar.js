import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#hero" className="nav-links">Home</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-links">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#info" className="nav-links">Info</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
