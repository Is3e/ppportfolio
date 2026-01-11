import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-pink-200">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
    </div>
  );
}

export default App;