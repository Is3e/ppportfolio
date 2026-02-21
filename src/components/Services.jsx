import React from 'react';
import { Globe, Layout, Server, Database, Smartphone, Cloud } from 'lucide-react';

const Services = () => {
  const skills = [
    {
      id: 1,
      title: "Framework côté client",
      icon: <Globe size={32} />,
      desc: "Conception d'interfaces modernes et réactives avec React, Tailwind CSS et Framer Motion. Création d'expériences intuitives avec des systèmes de conception propres.",
    },
    {
      id: 2,
      title: "UX/UI Design",
      icon: <Layout size={32} />,
      desc: "Design de maquettes précises sur Figma. Création de parcours utilisateurs fluides, de wireframes et de prototypes interactifs avant le développement.",
    },
    {
      id: 3,
      title: "Frameworks Serveur",
      icon: <Server size={32} />,
      desc: "Architecture backend robuste avec Node.js et Express. Gestion des API RESTful, sécurité des données et performance serveur.",
    },
    {
      id: 4,
      title: "Base de Données",
      icon: <Database size={32} />,
      desc: "Modélisation et gestion de bases de données SQL (PostgreSQL) et NoSQL (MongoDB). Optimisation des requêtes pour la rapidité.",
    },
    {
      id: 5,
      title: "Développement Mobile",
      icon: <Smartphone size={32} />,
      desc: "Adaptation des interfaces pour le mobile first et création d'applications natives ou hybrides avec React Native.",
    }
  ];

  return (
    <section className="py-20 bg-[#F5F3ED] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-12 max-w-2xl">
          <h2 className="font-titre text-5xl font-bold text-gray-900 mb-4">
            Mes domaines d'expertise
          </h2>
          <p className="text-gray-500">
            Une approche technique complète pour transformer vos idées en produits numériques performants.
          </p>
        </div>

        {/* CONTAINER DU SCROLL 
            - overflow-x-auto : Active le scroll horizontal
            - flex-nowrap : Empêche les cartes de passer à la ligne
            - snap-x : Active l'effet magnétique
            - no-scrollbar : Classe utilitaire (voir plus bas pour l'ajouter) ou style inline
        */}
        <div className="flex overflow-x-auto gap-8 pb-10 snap-x snap-mandatory scroll-smooth hide-scrollbar">
          
          {skills.map((skill) => (
            <div 
              key={skill.id}
              className="
                relative flex-shrink-0 snap-center
                w-[85vw] md:w-[450px] /* Largeur : 85% de l'écran sur mobile, fixe sur desktop */
                bg-white p-10 rounded-2xl 
                border border-gray-100 shadow-sm hover:shadow-xl 
                transition-all duration-300
              "
            >
              {/* Cercle Icone */}
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 mb-8">
                {skill.icon}
              </div>

              {/* Contenu */}
              <h3 className="font-titre text-2xl font-bold text-gray-900 mb-4">
                {skill.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-base">
                {skill.desc}
              </p>

              {/* Petite déco visuelle en bas */}
              <div className="absolute bottom-10 right-10 opacity-10">
                 {skill.icon}
              </div>
            </div>
          ))}

          {/* Spacer pour que la dernière carte ne colle pas au bord droit */}
          <div className="w-6 flex-shrink-0"></div>
        </div>

      </div>

      {/* Style inline pour cacher la scrollbar proprement */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Services;