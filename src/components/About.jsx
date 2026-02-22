import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  // Le texte exact que tu m'as fourni (avec correction typo "éclectique")
  const titleText = "Je m'appelle Louise et je suis une jeune développeuse éclectique et curieuse !";
  const words = titleText.split(" ");

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Animation Image (Apparition fluide)
      gsap.fromTo(imageRef.current,
        { x: -50, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );

      // 2. Animation H2 (Mot par mot)
      gsap.from(".title-word", {
        y: 30,
        opacity: 0,
        rotation: 3,
        duration: 0.6,
        stagger: 0.04, // Effet de vague
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        }
      });

      // 3. Animation du contenu (Le bloc texte d'origine)
      gsap.from(".original-content", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="apropos" ref={containerRef} className="max-w-7xl mx-auto px-6 py-24 overflow-hidden">
      
      {/* Structure Globale : Image à Gauche | Ta Div Principale à Droite */}
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
        
        {/* --- ZONE IMAGE (Nouvel ajout) --- */}
        <div ref={imageRef} className="relative hidden lg:block h-full min-h-[500px]">
           {/* Forme décorative arrière */}
           <div className="absolute rounded-3xl "></div>
           
           <img 
              src="./src/assets/imgs/front.JPG" //src\assets\imgs\front.JPG 
              alt="Louise" 
              className="w-full h-full object-cover rounded-3xl shadow-xl "
           />
        </div>

        {/* --- ZONE CONTENU (Ta div originale remise ici) --- */}
        <div ref={textRef}>
          
          {/* Ton H2 Animé */}
          <h2 className="text-xl md:text-3xl font-titre font-bold mb-12 leading-tight flex flex-wrap gap-x-2">
            {words.map((word, index) => (
              <span key={index} className="title-word inline-block origin-bottom-left text-gray-900">
                {word}
              </span>
            ))}
          </h2>

          {/* Ta structure originale exacte (Bio + Stats) */}
          <div className="original-content grid md:grid-cols-2 gap-10 items-start">
            
            {/* Colonne Gauche Originale */}
            <div>
              <p className="text-gray-600 text-md leading-relaxed mb-8 text-justify">
                Actuellement en dernière année de <strong className="font-bold text-gray-900">Bachelor Universitaire Métiers du Multimédia et de l'Internet</strong>, je suis une jeune développeuse web créative. 
                Ces trois dernières années, je me suis spécialisée dans le domaine du développement web en intégrant le parcours éponyme au BUT de Blois, de la conception de wireframes, à leur développement puis leur déploiement en ligne. J’ai également des bases en structures réseaux.
              </p>
              <button className="border border-[#7FC9AC] text-[#7FC9AC] px-6 py-3 rounded-full font-medium inline-flex items-center gap-3 hover:bg-[#A1CCBB] hover:text-white transition-colors shadow-lg shadow-pink-200/50 text-md">
                À propos de cela... <ArrowRight size={16} />
              </button>
            </div>
            
            {/* Colonne Droite Originale */}
            <div className="text-gray-500 text-sm leading-relaxed">
              <p className="mb-8 text-justify">
                Mes passions ? Marcher et la photographie, le dessin, le cinéma international, Readdead redemption 2
              </p>
              <p className="mb-12 text-justify">
                Mon prochain projet ? Mon stage à de début Mars à fin Juin.
              </p>
              
              {/* Stats avec ligne séparatrice */}
              <div className="border-t border-gray-300 pt-6 flex justify-between items-end">
                  <div>
                      <span className="block text-4xl font-light text-gray-800">4 ans</span>
                      <span className="text-xs uppercase tracking-wider font-semibold">de code</span>
                  </div>
                  <div className="text-right">
                      <span className="block text-4xl font-light text-gray-800">+30</span>
                      <span className="text-xs uppercase tracking-wider font-semibold">projets</span>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;