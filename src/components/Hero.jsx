import React from 'react';
import Aurora from './Aurora';
import DarkVeil from './DarkVeil';

const Hero = () => {
  return (
    <>
    <div 
      className="hero min-h-screen relative overflow-hidden bg-[#7FC9AC]"
    >
      
      <header className=" py-24 flex flex-col items-center justify-center text-center min-h-screen px-4 overflow-hidden ">
        
        {/* --- 3. LE TEXTE (Devant) --- */}
        <div className="relative z-10">
            <p className="text-xs font-semibold mix-blend-exclusion uppercase tracking-widest text-gray-300 mb-6">
              Bonjour ! Je suis Louise Berthet
            </p>
            <h1 className="text-5xl font-titres mix-blend-exclusion md:text-7xl font-bold leading-tight text-gray-200 font-sans">
              Fullstack developper<br />
              Ux & Ui designer
            </h1>
        </div>
        
        {/* Petit tag "Projets"
        <div className="absolute left-10 bottom-10 flex items-center gap-2 text-xs font-bold text-gray-600 z-10">
          <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
          Projets
        </div> */}
      </header>
    </div>
    </>
  );
};

export default Hero;