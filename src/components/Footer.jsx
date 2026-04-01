import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Fleche from '../assets/imgs/flecheD.svg';
import Logo from '../assets/imgs/lewis-bleu.svg';

const Footer = () => {
  return (
    <footer className="bg-[#340717] text-white w-full">
      <div className="max-w-[85%] mx-auto w-full flex flex-col md:flex-row justify-between items-start py-12 px-6">

        {/* colonne gauche: logo + ancres */}
        <div className="flex sm:flex-row md:flex-col gap-6 md:items-start">
          <nav className="flex sm:flex-row md:flex-col gap-4 text-md font-medium">
            <a href="#projets" className="hover:text-[#E94078] mix-blend-difference transition-colors text-2xl">Projets</a>
            <a href="#apropos" className="hover:text-[#E94078] mix-blend-difference transition-colors text-2xl">About</a>
            <a href="#contact" className="hover:text-[#E94078] mix-blend-difference transition-colors text-2xl">Contact</a>
          </nav>
        </div>

        {/* colonne droite: contact points */}
        <div className="flex flex-col items-end gap-4 pt-10 md:pt-0 sm:text-1xl md:text-2xl ms-28 md:ml-8">

          <a href="https://github.com/Is3e" target="_blank" rel="noopener noreferrer" className="hover:text-[#E94078] mix-blend-difference underline underline-offset-6 transition-colors flex items-center gap-3 " aria-label="Github">
            Github - Is3
            <img src={Fleche} alt="" width={18} />
          </a>

          <a href="https://www.linkedin.com/in/louise-berthet/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E94078] mix-blend-difference underline underline-offset-6 transition-colors flex items-center gap-3 " aria-label="LinkedIn">
            LinkedIn - Louise Berthet
            <img src={Fleche} alt="" width={18} />
          </a>

          <a href="mailto:louiseberthet2@gmail.com" className="hover:text-[#E94078] mix-blend-difference underline underline-offset-6 transition-colors flex items-center gap-3 " aria-label="Email">
            Mail - louiseberthet2@gmail.com
            <img src={Fleche} alt="" width={18} />
          </a>
        </div>
      </div> 

      <div className='flex flex-row justify-between max-w-[85%] mx-auto pb-5 px-6'>
        <img src={Logo} alt="logo" className="w-9" />
        <p className="pb-2 mix-blend-difference">@ {new Date().getFullYear()} - Louise Berthet</p>
      </div>


    </footer>
  );
};

export default Footer;