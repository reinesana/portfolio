import React, { useEffect, useRef } from 'react';
import './my_info.css'; 
import aboutMeLines from './images/about_me.png'; 
import studySetup from './images/setup_image.png';
import selfie from './images/me_image.png';
import vancouver from './images/vancouver_image.png';

function MyInfo() {
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
        <div className="about_container">
            <div className="me-section">
                <img src={aboutMeLines} alt="about-me" />
                <div className="study-set">
                    <img src={studySetup} alt="Study Setup" />
                </div>

                <div className="my-picture">
                    <img src={selfie} alt="my_selfie" />
                </div>

                <div className="van_image">
                    <img src={vancouver} alt="van_pic" />
                </div>
            </div>

            <div className="me_scroll" style={{ '--t': '20s' }}>
                <div>
                    <span>SOFTWARE</span>
                    <span>ENGINEER</span>
                    <span>MACHINE</span>
                    <span>LEARNING</span>
                    <span>ENTHUSIAST</span>
                    <span>GAME</span>
                    <span>DEVELOPER</span>
                </div>
            </div>

            <div className="animated-intro">
                <h1 ref={headingRef} data-value="Shana is a driven 2nd year Computing Science student at SFU passionate about software development and equity in STEM. She is a machine learning enthusiast with a strong foundation in machine learning algorithms and OOP with Python and C++. Aside from programming, Shana has a sound interest in music and the growth of women and disadvantageous groups in STEM 🔬. She is on a journey to build scalable and impactful technologies through innovative code for the betterment of society 🌎">
                    CLICK HERE
                </h1>
            </div>
        </div>
    );
}

export default MyInfo;
