import React, { useEffect, useRef } from 'react';
import { ArrowRight, Link2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import letterboxd from '../assets/imgs/letterboxd.jpeg';

// import portrait from '../assets/imgs/front.JPG';
import portrait from '../assets/imgs/portrait-Louise_BERTHET.JPG';
import escalade from "../assets/imgs/escalade.jpg";
import peinture from "../assets/imgs/peinture.jpg";
import films from '../assets/imgs/letterboxd.jpg';
import cuisine from "../assets/imgs/cuisine.jpg";
import photo from "../assets/imgs/photo.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  // Le texte exact que tu m'as fourni (avec correction typo "éclectique")
  const titleText = "Salut ! Moi c'est Louise";
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
    <section id="apropos" ref={containerRef} className="max-w-[85%] mx-auto px-8 py-24 overflow-hidden">
      
      {/* Structure Globale : Image à Gauche | Ta Div Principale à Droite */}
      <div className="">
        
        {/* --- ZONE CONTENU (Ta div originale remise ici) --- */}
        <div ref={textRef}>
         <h2 className="text-xl md:text-4xl font-bold mb-12 leading-tight flex flex-wrap gap-x-2">
            {words.map((word, index) => (
              <span key={index} className="title-word inline-block origin-bottom-left text-gray-900">
                {word}
              </span>
            ))}
          </h2>
        </div>

        <section className='flex row gap-10'>
{/*               section des textes                */}
          <section className="contenu w-[60%]">
            
            <div className="introGen">
              <div>
                <p className="text-gray-800 text-md leading-relaxed mb-8 text-justify">
                  Je suis une jeune développeuse Front-End, mais avant tout, je suis passionnée par la façon dont les gens interagissent avec le web. 
                  Je crois qu'un bon projet ne doit pas seulement être beau ou fonctionner techniquement : il doit avoir une âme, être intuitif et, surtout, être accessible à tout le monde.
                </p>

                <p className="text-gray-800 text-md leading-relaxed mb-8 text-justify">
                  Actuellement dans ma dernière année de BUT Métiers du Multimédia et de l'Internet (MMI) à Blois, j'ai eu la chance d'explorer tout le spectre de la création digitale. 
                  De la première esquisse sur Figma jusqu'au déploiement en ligne, en passant par les bases du back-end et du réseau, j'ai appris à comprendre chaque rouage d'un projet.
                </p>

              </div>

              <div>
                <h3 className='font-medium pb-2 text-3xl'>Pourquoi le front end ?</h3>
                <p>
                  C'est là que je peux lier mon esprit logique à ma sensibilité créative. 
                  J'aime résoudre des problèmes en utilisant le code et le design pour rendre les outils de tous les jours plus simples, plus beaux et plus inclusifs.
                </p>
              </div>

              <section className='xp flex flex-row pt-8 gap-10'>
                <div className='Etudes w-[38%]'>
                  <h3 className='pb-6 text-3xl'>Etudes</h3>

                  <div className=''>
                    <h4 className='font-medium'>Septembre 2026</h4>
                    <p className=''>ECV Nantes</p>
                    <p className='text-gray-400 font-light'>Stage de 3ème année MMI, INSERM de Tours</p>
                  </div>

                  <div className='pt-5'>
                    <h4 className='font-medium'>2023-2026</h4>
                    <p className=''>BUT Métiers du Multimédia et de l’internet - développement web.</p>
                    <p className='text-gray-400 font-light'>IUT de Blois à Blois, 41000</p>
                  </div>

                  <div className='pt-5'>
                    <h4 className='font-medium'>2020-2023 </h4>
                    <p className=''>Lycée Charles Peguy - Baccalauréat général - LLCE et NSI</p>
                    <p className='text-gray-400 font-light'>Lycée Charles Peguy à Gorges, 44190</p>
                  </div>
                </div>

                <div className='Expériences w-[38%]'>
                  <h3 className='pb-6 text-3xl'>Expériences</h3>
                  
                  <div className=''>
                    <h4 className='font-medium'>Mars-Juin 2026. </h4>
                    <p className='pt2'>Animations vocales temps reel en JS</p>
                    <p className='text-gray-400 pt2 font-light'>Stage de 3ème année MMI, INSERM de Tours</p>
                  </div>

                  <div className='pt-4'>
                    <h4 className='font-medium'>Septembre - Janvier 2026.</h4>
                    <p className='pt2'>FrameUp - Développement d’un headless CMS</p>
                    <p className='text-gray-400 pt2 font-light'>Projet universitaire dernière année, IUT de Blois </p>
                  </div>
                  
                  <div className='pt-4'>
                    <h4 className='font-medium'>Avril - Juin 2025.</h4>
                    <p className='pt2'>Refonte de site web</p>
                    <p className='text-gray-400 pt2 font-light'>Stage de 2ème année MMI, APORE, Chaussée Saint Victor</p>
                  </div>
                </div>
              </section>

            </div>
          </section>

{/*            section des images à droites          */}
          <section className="illus w-[40%] ">{/* --- ZONE IMAGE (Nouvel ajout) --- */}
            <div ref={imageRef} className="w-96 pb-10">              
              <img 
                  src={portrait}
                  alt="Louise" 
                  className="w-full h-full object-cover shadow-xl "
              />
            </div>

            <div className='pt-10 '>
              <h3>Centres d'interêts</h3>

              <div className='flex row gap-4'>
                <img 
                    src={escalade}
                    alt="escalade" 
                    className="w-42 h-full object-cover"
                />
                <p className='text-md'>Escalade</p>
              </div>

            </div>
          </section>
        </section>

{/*            fin section          */}
        </div>
      {/* </div> */}
    </section>
  );
};

export default About;