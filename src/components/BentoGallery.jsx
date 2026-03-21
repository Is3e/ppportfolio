import React from 'react';
import { projectsData } from '@/data/ProjectsData';
import { useParams, Link } from 'react-router-dom';

const BentoGallery = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  const images = project?.traces_projet?.filter(img => img && img.trim() !== '') || [];

  return (
    <div className="w-full h-full flex flex-col gap-4 p-4 overflow-y-auto">
      {images.map((imageUrl, index) => (
        <div 
          key={index}
          className="relative rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center w-full"
        >
          <img 
            src={imageUrl}
            alt={`Project image ${index + 1}`}
            className="w-full h-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default BentoGallery;