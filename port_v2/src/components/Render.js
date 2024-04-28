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
import projectContainer from './images/projects_container.svg';
import linkedin from './images/linkedin.svg';
import devpost from './images/devpost.svg';
import email from './images/email.svg';

const BoxesContainer = () => {
  const headingRef = useRef(null);

    useEffect(() => {
        let interval = null;
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const targetText = headingRef.current.getAttribute('data-value') || "";
        let displayed = Array(targetText.length).fill(' ');  // Start with empty spaces which will hold characters

        const animateText = () => {
            let iterations = 0;
            const maxIterations = 15;  // Maximum iterations to run the random replacement

            clearInterval(interval);

            interval = setInterval(() => {
                let completed = true;

                displayed = displayed.map((char, index) => {
                    if (char !== targetText[index]) {
                        completed = false;  // Set completed to false if any character is not yet correct
                        if (iterations >= maxIterations) {
                            return targetText[index];  // Set correct character if max iterations reached
                        }
                        return letters[Math.floor(Math.random() * letters.length)];  // Otherwise randomize character
                    }
                    return char;
                });

                headingRef.current.innerText = displayed.join("");

                if (completed || iterations >= maxIterations) {
                    clearInterval(interval);  // Stop the animation if completed or max iterations reached
                }
                iterations++;
            }, 70);  // Slow down the interval to 100ms for better visualization
        };

        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateText();
                        observer.disconnect();  // Disconnect after animation to avoid retriggering
                    }
                });
            },
            {
                root: null, // Defaulting to the viewport
                rootMargin: '0px',
                threshold: 0.5  // Trigger when 10% of the element is visible
            }
        );

        if (headingRef.current) {
            observer.observe(headingRef.current);
        }

        return () => {
            clearInterval(interval);
            observer.disconnect();
        };
    }, []);  // Dependency

  return (
    
    <div className="projects_container">
        <div className="project_lines">
        <img src={projectContainer} className="proj-container"></img>
        </div>
        
        

       
    <div className="box-list" style={{ position: 'relative', display: 'flex', flexDirection: 'row', gap: '20px', flexWrap: 'wrap' }}>
      <Boxes image={Refugee} tag_image={RefugeeTag} githubLink="https://github.com/reinesana/Red-Sea" box="Red Sea is a web-app that predicts and maps safe evacuation routes for refugees fleeing war, essential medical and humanitarian resources in Gaza." alt="Refugee image" title="REA SEA" style={{ alignSelf: 'flex-start' }} />
      <Boxes image={Urban} tag_image={UrbanTag} githubLink="https://github.com/gprem09/Urban.I" box="Urbani is a platform aimed at revitalizing urban areas impacted by human conflicts and natural disasters utilizing AI and advanced 3D mapping." alt="Urban landscape image" title="URBANI" style={{ alignSelf: 'center' }} />
      <Boxes image={Machine} tag_image={MachineTag} githubLink="https://github.com/reinesana/MLPro" box="Designed a machine learning library in C++, providing a set of pre-built functions and tools for deploying and enhancing AI-related software development process." alt="Machine learning model image" title="ML PRO" style={{ alignSelf: 'flex-end' }} />
      <Boxes image={MRI} tag_image={RefugeeTag} githubLink="https://github.com/reinesana/brain_tumor_classification" box="Developed a 2D brain tumour medical imaging that identifies tumorous brain scans. The model predicts results based on a 2D Convolutional Neural Network. " alt="MRI image" title="MRI " style={{ alignSelf: 'flex-end' }} />
    </div>

    <div className="animated-projects">
                <h1 ref={headingRef} data-value="Shana is on a journey to code impactful and sustainable solutions. With a focus on refugee aid and environmental restoration, she is aiming to change society's trajectory towards more emmediate issues for the betterment of tomorrow.">
                    CLICK HERE
                </h1>
                
    </div>

    <div className="contact-container">
   
        <div className="outro">
        <h1>Want a closer look at Shana's projects? Check out her accomplishments on devpost or feel free to connect with her on Linkedin.</h1>
        </div>
        

         <a href="https://www.linkedin.com/in/shana-nursoo-363826189/" className="contact-linkedin"><img src={linkedin}/></a>
         



        <div className="contact">
        <a href="https://devpost.com/17shana2017?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" className="contact-devpost"><img src={devpost}/></a>
        <a href="mailto:shana_nursoo@sfu.ca" className="contact-email"><img src={email}/></a>

        </div>

   
   
        
         
                
 

    </div>
    </div>




  );
};

export default BoxesContainer;
