import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Fleche from '../assets/imgs/flecheD.svg';
import Logo from '../assets/imgs/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-[#05060A] text-[#A0D6CF] w-full">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-start py-12 px-6">

        {/* Left column: logo + anchors */}
        <div className="flex flex-col gap-6">
          <img src={Logo} alt="logo" className="w-9" />
          <nav className="flex flex-col gap-4 text-md font-medium">
            <a href="#projets" className="hover:text-[#E94078] transition-colors text-2xl">Projets</a>
            <a href="#apropos" className="hover:text-[#E94078] transition-colors text-2xl">About</a>
            <a href="#contact" className="hover:text-[#E94078] transition-colors text-2xl">Contact</a>
          </nav>
          <p className="mt-6">@ {new Date().getFullYear()} - Louise Berthet</p>
        </div>

        {/* Center spacer (keeps layout similar to image) */}
        <div className="flex-1" />

        {/* Right column: contact points */}
        <div className="flex flex-col items-end gap-4 pt-10">

          <a href="https://github.com/Is3e" target="_blank" rel="noopener noreferrer" className="hover:text-[#E94078] underline underline-offset-6 transition-colors flex items-center gap-3 text-2xl" aria-label="Github">
            Github - Is3
            <img src={Fleche} alt="" width={18} />
          </a>

          <a href="https://www.linkedin.com/in/louise-berthet/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E94078] underline underline-offset-6 transition-colors flex items-center gap-3 text-2xl" aria-label="LinkedIn">
            LinkedIn - Louise Berthet
            <img src={Fleche} alt="" width={18} />
          </a>

          <a href="mailto:louiseberthet2@gmail.com" className="hover:text-[#E94078] underline underline-offset-6 transition-colors flex items-center gap-3 text-2xl" aria-label="Email">
            Mail - louiseberthet2@gmail.com
            <img src={Fleche} alt="" width={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;