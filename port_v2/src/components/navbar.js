import React from 'react';
import './Navbar.css';
import home from '/Users/shanakesia/Desktop/CMPT/projects/portfolio/port_v2/src/components/images/home_icon.png';
import about from '/Users/shanakesia/Desktop/CMPT/projects/portfolio/port_v2/src/components/images/about_icon.png';
import projects from '/Users/shanakesia/Desktop/CMPT/projects/portfolio/port_v2/src/components/images/projects_icon.png';
import experience from '/Users/shanakesia/Desktop/CMPT/projects/portfolio/port_v2/src/components/images/experience_icon.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-links"><img src={home}/></a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links"><img src={about}/></a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-links"><img src={projects}/></a>
          </li>
          <li className="nav-item">
            <a href="#experience" className="nav-links"><img src={experience}/></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
