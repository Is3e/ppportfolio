import React from 'react';

const Hero = () => {
  return (
    <header className="relative py-24 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Le fond gris derrière le texte (Forme arrondie) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] bg-gray-200 rounded-[3rem] -z-10"></div>
      
      <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-6">
            Bonjour ! Je suis Louise Berthet
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900 font-sans">
            Fullstack developper<br />
            Ux & Ui designer
          </h1>
      </div>
      
      {/* Petit tag jaune "Projets" visible à gauche sur le screen */}
      <div className="absolute left-10 bottom-10 flex items-center gap-2 text-xs font-bold text-gray-600">
        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
        Projets
      </div>
    </header>
  );
};

export default Hero;