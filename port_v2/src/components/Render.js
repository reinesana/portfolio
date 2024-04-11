import React, { useEffect, useRef } from 'react';
import Boxes from './Boxes';
import './Render.css';
import Refugee from './images/refugee.png';
import Urban from './images/urban.png';
import Machine from './images/ML.png';
import MRI from './images/MRI_image.png';
import RefugeeTag from './images/refugee_tag.png'; // Path to yellow tag image for refugee
import UrbanTag from './images/urban_tag.png'; // Path to yellow tag image for urban
import MachineTag from './images/ML_tag.png'; // Path to yellow tag image for machine
import projectContainer from './images/projects_container.png';

const BoxesContainer = () => {

  return (
    
    <div className="projects_container">
        <img src={projectContainer} className="proj-container"></img>

       
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'row', gap: '20px', flexWrap: 'wrap' }}>
      <Boxes image={Refugee} tag_image={RefugeeTag} githubLink="https://github.com/reinesana/Red-Sea" box="Red Sea is a web-app that predicts and maps safe evacuation routes for refugees fleeing war, essential medical and humanitarian resources in Gaza." alt="Refugee image" title="REA SEA" style={{ alignSelf: 'flex-start' }} />
      <Boxes image={Urban} tag_image={UrbanTag} githubLink="https://github.com/gprem09/Urban.I" box="Urbani is a platform aimed at revitalizing urban areas impacted by human conflicts and natural disasters utilizing AI and advanced 3D mapping." alt="Urban landscape image" title="URBANI" style={{ alignSelf: 'center' }} />
      <Boxes image={Machine} tag_image={MachineTag} githubLink="https://github.com/reinesana/MLPro" box="Designed a machine learning library in C++, providing a set of pre-built functions and tools for deploying and enhancing AI-related software development process." alt="Machine learning model image" title="ML PRO" style={{ alignSelf: 'flex-end' }} />
      <Boxes image={MRI} tag_image={RefugeeTag} githubLink="https://github.com/reinesana/brain_tumor_classification" box="Developed a 2D brain tumour medical imaging that identifies tumorous brain scans. The model predicts results based on a 2D Convolutional Neural Network. " alt="MRI image" title="MRI " style={{ alignSelf: 'flex-end' }} />
    </div>

</div>

  );
};

export default BoxesContainer;
