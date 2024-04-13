import React from 'react';
import './Navbar.css';
import homeIcon from './images/home_icon.png';
import aboutIcon from './images/about_icon.png';
import projectsIcon from './images/projects_icon.png';
import experienceIcon from './images/experience_icon.png';
import resumePDF from './pdf/Shana_K_Resume.pdf';


function Navbar() {
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    return (
        <nav className="navbar">
            <ul className="nav-menu">
                <li className="nav-item">
                    <a onClick={() => scrollToSection('hero-section')} className="nav-links">
                        <img src={homeIcon} alt="Home" />
                    </a>
                </li>
                <li className="nav-item">
                    <a onClick={() => scrollToSection('about-section')} className="nav-links">
                        <img src={aboutIcon} alt="About" />
                    </a>
                </li>
                <li className="nav-item">
                    <a onClick={() => scrollToSection('projects-section')} className="nav-links">
                        <img src={projectsIcon} alt="Projects" />
                    </a>
                </li>
                <li className="nav-item">
                  <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="nav-links">
                    <img src={experienceIcon} alt="Experience" />
                  </a>
                </li>


            </ul>
        </nav>
    );
}

export default Navbar;
