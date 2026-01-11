import React from 'react';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="apropos" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-xl md:text-2xl font-bold mb-12 max-w-2xl">
        Je m'appelle Louise et je suis une jeune développeuse dynamique et curieuse
      </h2>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Colonne Gauche */}
        <div>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 text-justify">
            Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
          </p>
          <button className="bg-[#E94078] text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-3 hover:bg-pink-600 transition-colors shadow-lg shadow-pink-200/50 text-sm">
            À propos de cela... <ArrowRight size={16} />
          </button>
        </div>
        
        {/* Colonne Droite */}
        <div className="text-gray-500 text-sm leading-relaxed">
          <p className="mb-12 text-justify">
            Mauris quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
          </p>
          
          {/* Stats avec ligne séparatrice */}
          <div className="border-t border-gray-300 pt-6 flex justify-between items-end">
              <div>
                  <span className="block text-4xl font-light text-gray-800">4 ans</span>
              </div>
              <div className="text-right">
                  <span className="block text-4xl font-light text-gray-800">+30 projets</span>
              </div>
          </div>
          <p className="text-[10px] text-gray-300 mt-2 text-center uppercase tracking-wide">
            Statistiques certifiées par GitHub
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;