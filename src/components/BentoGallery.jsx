import React from 'react';
import { projectsData } from '@/data/ProjectsData';
import { useParams, Link } from 'react-router-dom';
const BentoGallery = () => {
  const { id } = useParams(); // Récupère "1"
  const project = projectsData.find(p => p.id === parseInt(id)); // Trouve le projet ID 1 dans la liste

  // images doit être un tableau de 4 URLs : ["url1", "url2", "url3", "url4"]
  // Si pas d'images fournies, on met des placeholders gris pour visualiser la structure
  // const imgs = images || ["", "", "", ""]; 


  // {project.traces_projet.map((lien, index) => ( ))} 
  // faire la boucle pour personnaliser l'affciage selon l'index de l'image

  const imas = project.traces_projet || []


  return (
    <div className="flex flex-col gap-4 w-full h-full">
      
      {/* --- COLONNE GAUCHE --- */}
      <div className="flex flex-col gap-4">
        
        {/* 1. Grand rectangle (Haut Gauche) */}
        <div className="relative h-80 md:h-96 rounded-md overflow-hidden bg-gray-200">
           {imas[0] && (
             <img 
               src={imas[0]} 
               alt="Gallery 1" 
               className="w-full h-full object-cover" 
             />
           )}
        </div>

      </div>

      {/* --- COLONNE DROITE --- */}
      <div className="flex flex-col gap-4">
        
        {/* 3. Petit rectangle (Haut Droite) */}
        <div className="relative h-60 md:h-75 rounded-2xl overflow-hidden bg-gray-200">
           {imas[1] && (
             <img 
               src={imas[2]} 
               alt="Gallery 3" 
               className="w-full h-full object-cover" 
             />
           )}
        </div>

        {/* 4. Grand rectangle (Bas Droite) */}
        <div className="relative h-80 md:h-100 rounded-2xl overflow-hidden bg-gray-200">
           {imas[2] && (
             <img 
               src={imas[3]} 
               alt="Gallery 4" 
               className="w-full h-full object-cover" 
             />
           )}
        </div>

        {/* 2. Petit rectangle (Bas Gauche) */}
        <div className="relative h-40 md:h-48 rounded-2xl overflow-hidden bg-gray-200">
           {imas[3] && (
             <img 
               src={imas[1]} 
               alt="Gallery 2" 
               className="w-full h-full object-cover" 
             />
           )}
        </div>

      </div>

    </div>
  );
};

export default BentoGallery;