import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/ProjectsData';
import Skills from './Skills';

const Projects = () => {
  return (
    <>
    <Skills />
    <section id="projets" className="max-w-[85%] mx-auto px-6 py-24">
      <h2 className="text-6xl font-bold text-[#070E34] mb-8">
        Mes derniers projets
      </h2>
      
      
      <div className="flex flex-col pb-2 pt-5">
        {projectsData.map((project) => (
          <ProjectCard 
            key={project.id} 
            {...project} //concat des datas
          />
        ))}
      </div>
    </section>
    </>
  );
};

export default Projects;