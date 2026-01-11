import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-6 max-w-7xl mx-auto w-full">
      {/* Logo Area */}
      <div className="flex items-center gap-2 font-bold text-lg">
        {/* Placeholder logo bleu comme sur le screen */}
        <div className="w-8 h-8 text-blue-500">
           <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="12"/></svg>
        </div>
        <span className="text-gray-900">Louise Berthet</span>
      </div>
      
      {/* Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <a href="#projets" className="hover:text-black transition-colors">Projets</a>
        <a href="#apropos" className="hover:text-black transition-colors">A propos</a>
        <a href="#contact" className="bg-[#E94078] text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors flex items-center gap-2 shadow-md shadow-pink-200">
          Contact <span className="text-xs bg-white/20 rounded-full w-4 h-4 flex items-center justify-center">→</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;