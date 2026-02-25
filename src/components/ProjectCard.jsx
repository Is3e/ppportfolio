import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, catg, pitch, desc, titre_lien, date, image, lien, techno }) => {
  const catgName = typeof catg === 'object' ? catg?.name : catg;

  return (
    <Link 
      to={`/project/${id}`} 
      className="w-full bg-white overflow-hidden shadow-md hover:shadow-lg shadow-pink-200/50 transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* grid md:grid-cols-5  */}
      <div className="flex flex-col sm:flex-row sm:h-4xl">
        {/* Image: full-width on mobile (centered), fixed-size on sm+ to keep original layout */}
        <div className="w-full sm:w-3xl h-64 sm:h-auto sm:flex-shrink-0 mx-auto sm:mx-0">
          <img 
            src={image}
            alt={title} 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Contenu à droite */}
        <div className="flex flex-col justify-end flex-1 px-8 py-6 w-8xl">
          <div className='mb-10'>
            <div className="flex justify-between items-end mb-3">
              <h2 className="text-3xl font-bold text-gray-800 w-80">
                {title}
              </h2>
              {/* {date && (
                <span className="text-sm text-gray-400 whitespace-nowrap">
                  {date}
                </span>
              )} */}
            </div>
            
            <p className="text-medium text-gray-500 line-clamp-2 leading-relaxed">
              {pitch}
            </p>
          </div>
          
          <div className='flex justify-between items-end my-8'>
            {lien && typeof lien === 'string' && lien.trim() !== '' && (
              <div className='group hover:text-pink-600 transition-colors'>
                <h3 className='text-gray-400'>Lien du projet</h3>
                <button
                  type="button"
                  onClick={() => lien && window.open(lien, '_blank', 'noopener,noreferrer')}
                  className="text-xs font-semibold text-gray-900 hover:text-pink-600 transition-colors mt-1"
                >
                  {titre_lien}
                </button>
              </div>
            )}

            <div>
              <h3 className='text-gray-400 flex justify-end'>Technos utilisées</h3>
              <p className="text-xs font-semibold text-gray-900 transition-colors mt-1 flex flex-row">
                {techno.map((tech, index) => (
                  <span
                    key={index} 
                    className="px-2 text-gray-700 text-xs whitespace-nowrap flex justify-end"
                  >
                    {tech}
                  </span>
                ))}
              </p>
            </div>

          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProjectCard;