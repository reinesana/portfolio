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
  const headingRef = useRef(null);

    useEffect(() => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const targetText = "STRIVING FOR IMPACTFUL PROJECTS";  // Assuming you want this text to animate
        let displayed = Array(targetText.length).fill(' ');  // Start with empty spaces
        let interval;

        const animateText = () => {
            let iterations = 0;
            const maxIterations = 15;  // Max iterations before stopping randomization

            interval = setInterval(() => {
                let completed = true;

                displayed = displayed.map((char, index) => {
                    if (char !== targetText[index]) {
                        completed = false;  // Not all chars have been replaced yet
                        if (iterations >= maxIterations) {
                            return targetText[index];  // Fix the character if max iterations reached
                        }
                        return letters[Math.floor(Math.random() * letters.length)];  // Continue randomizing
                    }
                    return char;
                });

                headingRef.current.innerText = displayed.join('');

                if (completed || iterations >= maxIterations) {
                    clearInterval(interval);  // Stop the interval if text is completed or maxed out
                }
                iterations++;
            }, 70);  // Interval for the animation speed
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateText();  // Start the animation when the element is in view
                    observer.disconnect();  // And disconnect the observer
                }
            });
        }, {
            root: null,  // Defaulting to the viewport
            rootMargin: '0px',
            threshold: 0.2  // Start animating when 10% of the element is visible
        });

        observer.observe(headingRef.current);

        return () => {
            clearInterval(interval);
            observer.disconnect();
        };
    }, []);



  return (
    
    <div className="projects_container">
        <img src={projectContainer} className="proj-container"></img>

       
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'row', gap: '20px', flexWrap: 'wrap' }}>
      <Boxes image={Refugee} tag_image={RefugeeTag} githubLink="https://github.com/reinesana/Red-Sea" box="Red Sea is a web-app that predicts and maps safe evacuation routes for refugees fleeing war, essential medical and humanitarian resources in Gaza." alt="Refugee image" title="REA SEA" style={{ alignSelf: 'flex-start' }} />
      <Boxes image={Urban} tag_image={UrbanTag} githubLink="https://github.com/gprem09/Urban.I" box="Urbani is a platform aimed at revitalizing urban areas impacted by human conflicts and natural disasters utilizing AI and advanced 3D mapping." alt="Urban landscape image" title="URBANI" style={{ alignSelf: 'center' }} />
      <Boxes image={Machine} tag_image={MachineTag} githubLink="https://github.com/reinesana/MLPro" box="Designed a machine learning library in C++, providing a set of pre-built functions and tools for deploying and enhancing AI-related software development process." alt="Machine learning model image" title="ML PRO" style={{ alignSelf: 'flex-end' }} />
      <Boxes image={MRI} tag_image={RefugeeTag} githubLink="https://github.com/reinesana/brain_tumor_classification" box="Developed a 2D brain tumour medical imaging that identifies tumorous brain scans. The model predicts results based on a 2D Convolutional Neural Network. " alt="MRI image" title="MRI " style={{ alignSelf: 'flex-end' }} />
    </div>

    



    <div className="animated-projects">
    <span ref={headingRef} data-value="">

</span>

      
    </div>
</div>

  );
};

export default BoxesContainer;
