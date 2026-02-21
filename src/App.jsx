// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';

// Import de tes composants existants
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import ProjectZoom from './components/ProjectZoom';
import Footer from './components/Footer';
import DetailProjet from './components/DetailProjet';

// 1. Composant Page d'Accueil (rassemble tout ce que tu avais avant)
const HomePage = () => (
  <>
    <NavBar />
    <Hero />
    <About />
    <Services />
    <Projects />
    <Footer />
  </>
);

// 3. App Principale avec le Router
function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900 selection:bg-pink-200">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<DetailProjet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;