import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [1, 2, 3, 4]; // Placeholder IDs

  return (
    <section id="projets" className="max-w-6xl mx-auto px-6 pb-24 pt-10">
      <h2 className="text-sm font-medium text-gray-900 mb-8">Mes derniers projets</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;