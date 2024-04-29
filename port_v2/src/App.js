import React from 'react';
import Navbar from './components/Navbar';
import MyInfo from './components/my_info';
import Landing from './components/Landing';
import Projects from './components/Render';
import './App.css';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
     
      <div id="home-section">
        <Landing />
      </div>
      <div id="about-section">
        <MyInfo />
      </div>
      <div id="projects-section">
        <Projects />
      </div>
    </div>
  );
}

export default App;
