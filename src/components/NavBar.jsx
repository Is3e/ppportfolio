import React from 'react';
import logoImg from '../assets/imgs/lewis-bleu.png';

const NavBar = () => {
  return (
    <nav className=" top-0 z-50 fixed items-center w-full">
      <div className='container flex justify-between w-85l mx-auto py-4'>
        
        {/* Logo Area */}
        <div className="flex items-center gap-2 font-bold text-lg">
          <div className="w-15 h-8 flex items-center">
            <img src={logoImg} alt="" />
          </div>
          {/* <span className="text-[#201A30]">Louise Berthet</span> */}
        </div>
        
        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#22163A]">
          <a href="#projets" className="hover:text-black transition-colors">Projets</a>
          <a href="#apropos" className="hover:text-black transition-colors">A propos</a>
          <a href="#footer" className="hover:text-black transition-colors"> Contact → </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;