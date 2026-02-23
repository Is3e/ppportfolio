import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ProjectZoom from './components/ProjectZoom';
import Footer from './components/Footer';
import DetailProjet from './components/DetailProjet';
import Skills from './components/Skills';


const HomePage = () => (
  <>
    <NavBar />
    <Hero />
    <About />
    <Projects />
  </>
);


function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900 selection:bg-pink-200">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<DetailProjet />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;