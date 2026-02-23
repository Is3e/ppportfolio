import React from 'react';
import logoImg from '../assets/imgs/lewis.png';
import Fleche from '../assets/imgs/flecheD.svg';

const NavBar = () => {
  return (
    <nav className=" top-0 z-50 fixed items-center w-full">
      <div className='container flex justify-between w-85l mx-auto py-4'>
        
        {/* Logo Area */}
        <div className="flex items-center gap-2 font-bold text-lg">
          <div className="w-15 h-8 flex items-center">
            <img src={logoImg} alt="lewis" width={40}/>
          </div>
          {/* <span className="text-[#201A30]">Louise Berthet</span> */}
        </div>
        
        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#22163A]">
          <a href="#projets" className="hover:text-black transition-colors">Projets</a>
          <a href="#apropos" className="hover:text-black transition-colors">A propos</a>
          <a href="mailto:louiseberthet2@gmail.com" className="hover:text-black transition-colors flex flex-row gap-2"> Contact </a>
          {/* <img src={Fleche} alt="" width={10} /> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;