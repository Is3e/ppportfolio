import React from 'react';
import BentoGallery from './BentoGallery';
import { projectsData } from '../data/ProjectsData';
import { useParams, Link } from 'react-router-dom';

const ProjectZoom = () => {
  const { id } = useParams(); // Récupère "1"
  const project = projectsData.find(p => p.id === parseInt(id)); // Trouve le projet ID 1 dans la liste

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-10">
      <h1 className='text-3xl font-titre font-bold text-[#070E34]'>{project.title}</h1>
      <p className="mb-8">{project.desc}</p>
      
      {/* --- NOUVEAU : SECTION STACK TECHNIQUE --- */}
        {/* On vérifie d'abord si project.techno existe et s'il n'est pas vide */}
        {project.techno && project.techno.length > 0 && (
          <div className="mb-10">
              <h3 className="font-titre text-xl font-bold mb-4 text-gray-900">Technologies utilisées</h3>
              <div className="flex flex-wrap gap-3">
                {project.techno.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium border border-gray-200 hover:border-pink-300 hover:bg-pink-50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

      <div className="max-w-4xl w-full mt-10 mb-10">        
        {/* Tu passes tes images ici */}
        <BentoGallery 
            images={[
                "https://url-image-grande-1.jpg",
                "https://url-image-petite-2.jpg",
                "https://url-image-petite-3.jpg",
                "https://url-image-grande-4.jpg"
            ]} 
        />
        {/* <BentoGallery 
            images={[
                "https://url-image-grande-1.jpg",
                "https://url-image-petite-2.jpg",
                "https://url-image-petite-3.jpg",
                "https://url-image-grande-4.jpg"
            ]} 
        /> */}
        </div>

      <Link to="/" className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition">
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default ProjectZoom;