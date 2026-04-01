import React from 'react';
import { Globe, Layout, Server, Database, Smartphone } from 'lucide-react';
// FigmaWorkflowFrameUp.png
import front from '../assets/imgs/FigmaWorkflowFrameUp.png';
import UX from '../assets/imgs/FigmaWorkflowFrameUp.png';
import back from '../assets/imgs/FigmaWorkflowFrameUp.png';
import branding from '../assets/imgs/FigmaWorkflowFrameUp.png';
import anim from '../assets/imgs/FigmaWorkflowFrameUp.png';
import bdd from '../assets/imgs/FigmaWorkflowFrameUp.png';

const Skills = () => {
    const skills = [
        {
            id: 1,
            title: "Framework côté client",
            icon: <Globe size={32} />,
            description: "Conception d'interfaces modernes et réactives avec React, Tailwind CSS et JS.",
            imageSrc: front,
            color: "#7FC9AC",            // footerText: "Dernier projet : Oct 13, 2025"
        },
        {
            id: 2,
            title: "UX/UI Design",
            icon: <Layout size={32} />,
            description: "Création de parcours utilisateurs fluides, de wireframes et de prototypes interactifs sur Figma avant développement.",
            imageSrc: UX,
            color: "#7bb7f4",
            // footerText: "Dernier projet : Oct 13, 2025"
        },
        {
            id: 3,
            title: "Frameworks Serveur",
            icon: <Server size={32} />,
            description: "Architecture backend robuste avec Symfony, gestion d'API REST avec Node.js et Express.",
            imageSrc: back,
            color: "#F290C6",
            // footerText: "Dernier projet : Oct 13, 2025"
        },
        {
            id: 4,
            title: "Animation 3D",
            icon: <Smartphone size={32} />,
            description: "Animer des sections avec du Three.js, réaliser de courtes animations avec première pro.",
            imageSrc: anim,
            color: "#FF8770" ,
            // footerText: "Dernier projet : Oct 13, 2025"
        },
        {
            id: 5,
            title: "Communication digitale",
            icon: <Database size={32} />,
            description: "Conception de charte garphique, identité visuelle pour renforcer la cohérence des produits.",
            imageSrc: branding,
            color: "#FCDEAE",
            // footerText: "Dernier projet : Oct 13, 2025"
        },
        {
            id: 6,
            title: "Base de Données",
            icon: <Database size={32} />,
            description: "Modélisation et gestion de bases de données SQL (PostgreSQL) et NoSQL (MongoDB).",
            imageSrc: bdd,
            color: "#340717" ,
            // footerText: "Dernier projet : Oct 13, 2025"
        }
        
    ];

    return (
        <section className="pt-5">
            <div className="max-w-[85%] mx-auto px-6">
                
                {/* En-tête de la section */}
                <div className="mb-12 max-w-4xl">
                    <h2 className="text-6xl font-bold text-gray-900 mb-4">
                        Mes domaines d'expertise
                    </h2>
                    <p className="text-gray-500 text-md">
                        En 3ans de formation pluridisciplinaire Métiers du Multimédia et de l'Internet, j'ai pu développer différentes compétences complémentaires.
                    </p>
                </div>

                {/* CONTENEUR DE SCROLL HORIZONTAL CORRIGÉ */}
                <div className="flex overflow-x-auto gap-8 pb-10 pt-4 snap-x snap-mandatory scroll-smooth hide-scrollbar">
                    {skills.map((skill) => (
                        <div 
                            key={skill.id} 
                            className="color group relative w-72 h-72 flex-shrink-0 snap-start transition-transform duration-300 ease-out hover:-translate-y-3 cursor-pointer"
                        >
                            
                            {/* 1. L'arrière du dossier (Violet uni) */}
                            <div className="absolute inset-0 z-0 drop-shadow-xl">
                                <div className="absolute top-0 left-0 w-[55%] h-12 rounded-tl-2xl rounded-tr-xl" style={{ backgroundColor: skill.color }} />
                                <div className="absolute top-6 left-0 w-full h-[calc(100%-1.5rem)] rounded-2xl" style={{ backgroundColor: skill.color }} />
                            </div>

                            {/* 2. L'image du projet glissée à l'intérieur */}
                            <div className="absolute z-10 top-10 left-4 right-4 h-36 rounded-xl overflow-hidden shadow-lg transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[-2deg] bg-white">
                                <img 
                                    src={skill.imageSrc} 
                                    alt={skill.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* 3. Le devant du dossier (Effet Glassmorphism / Flou) */}
                            <div className="absolute z-20 bottom-0 left-0 w-full h-[60%] bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-[0_-4px_24px_rgba(0,0,0,0.1)] p-5 flex flex-col justify-between overflow-hidden">
                                
                                <div>
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="text-white text-xl font-bold tracking-wide">
                                            {skill.title}
                                        </h3>
                                        <div className='text-white/80 p-1 bg-white/10 rounded-full flex-shrink-0 backdrop-blur-sm'>
                                            {skill.icon}
                                        </div>
                                    </div>
                                    <p className="text-white/90 text-sm font-medium leading-tight">
                                        {skill.description}
                                    </p>
                                </div>

                                {/* <div className="text-white/70 text-xs font-medium">
                                    {skill.footerText}
                                </div> */}
                                
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                            </div>
                        </div>
                    ))}
                    
                    {/* Spacer pour que la dernière carte ne colle pas au bord droit lors du scroll */}
                    <div className="w-2 flex-shrink-0"></div>
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

export default Skills;