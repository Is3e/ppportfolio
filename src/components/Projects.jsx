import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/ProjectsData';

const Projects = () => {
  return (
    <section id="projets" className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-6xl font-titre font-bold text-[#070E34] mb-8">
        Mes derniers projets
      </h2>
      
      {/* Grille responsive : 1 col sur mobile, 2 sur tablette/desktop */}
      <div className="flex flex-col pb-8">
        {projectsData.map((project) => (
          <ProjectCard 
            key={project.id} 
            {...project} //concaténation des datas
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;