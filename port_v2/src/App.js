import React from 'react';
import Navbar from './components/Navbar';
import MyInfo from './components/my_info';
import Landing from './components/Landing';
import Projects from './components/Render';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Landing />} />
        <Route path="/about" element={<MyInfo />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<MyInfo />} />
      </Routes>
      </>
  );
}

export default App;

