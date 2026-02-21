import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#070E34] text-[#D4DDE6] h-96 flex items-center px-24">
      <div className=" mx-auto flex flex-row gap-6 ">
        
        {/* Navigation vers les ancres */}
        <nav className="flex flex-col flex-wrap justify-center gap-6 text-md font-medium">
          <a href="#projets" className="hover:text-black transition-colors">Projets</a>
          <a href="#apropos" className="hover:text-black transition-colors">À propos</a>
          <a href="#contact" className="hover:text-black transition-colors">Contact</a>
        </nav>

        {/* Copyright */}
        <aside className="flex text-md text-gray-500 text-center">
          <p>Copyright © {new Date().getFullYear()} - Tous droits réservés | <span className="font-bold">Louise Berthet</span></p>
        </aside>

        {/* Réseaux Sociaux (Remplacé par Lucide pour la propreté) */}
        <div className="flex flex-col gap-6 justify-center">
          <a href="https://github.com/Is3e" target="_blank" rel="noopener noreferrer" className="hover:text-[#E94078] transition-colors" aria-label="Github">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/louise-berthet/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E94078] transition-colors" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href="mailto:louiseberthet2@gmail.com" className="hover:text-[#E94078] transition-colors" aria-label="Email">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;