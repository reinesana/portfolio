import React from 'react';
import './Navbar.css';
import homeIcon from '/Users/shanakesia/Desktop/CMPT/projects/portfolio/port_v2/src/components/images/home_icon.png';
import aboutIcon from '/Users/shanakesia/Desktop/CMPT/projects/portfolio/port_v2/src/components/images/about_icon.png';
import projectsIcon from '/Users/shanakesia/Desktop/CMPT/projects/portfolio/port_v2/src/components/images/projects_icon.png';
import experienceIcon from '/Users/shanakesia/Desktop/CMPT/projects/portfolio/port_v2/src/components/images/experience_icon.png';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/home" className={({ isActive }) => isActive ? "nav-links active" : "nav-links"}>
              <img src={homeIcon} alt="Home"/>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-links active" : "nav-links"}>
              <img src={aboutIcon} alt="About"/>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-links active" : "nav-links"}>
              <img src={projectsIcon} alt="Projects"/>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/experience" className={({ isActive }) => isActive ? "nav-links active" : "nav-links"}>
              <img src={experienceIcon} alt="Experience"/>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
