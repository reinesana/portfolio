import React, { useEffect, useRef } from 'react';
import './my_info.css'; 
import aboutMeLines from './images/about_me.png'; 
import studySetup from './images/setup_image.png';
import selfie from './images/me_image.png';
import vancouver from './images/vancouver_image.png';

function MyInfo() {
    const headingRef = useRef(null);

    useEffect(() => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const targetText = headingRef.current ? headingRef.current.getAttribute('data-value') || "" : "";
        let displayed = Array(targetText.length).fill(' ');
        let interval = null;

        const animateText = () => {
            let iterations = 0;
            const maxIterations = 15;

            interval = setInterval(() => {
                let completed = true;
                displayed = displayed.map((char, index) => {
                    if (char !== targetText[index]) {
                        completed = false;
                        return iterations >= maxIterations ? targetText[index] : letters[Math.floor(Math.random() * letters.length)];
                    }
                    return char;
                });

                if (headingRef.current) {
                    headingRef.current.innerText = displayed.join("");
                }

                if (completed || iterations >= maxIterations) {
                    clearInterval(interval);
                }
                iterations++;
            }, 70);
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateText();
                    observer.disconnect();
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        });

        if (headingRef.current) {
            observer.observe(headingRef.current);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
            observer.disconnect();
        };
    }, []);  // Ensures this effect runs only once

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
