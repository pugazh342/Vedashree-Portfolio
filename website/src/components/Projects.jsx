import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Selected Work
          </h2>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Engineering Intelligence from Chaos
          </h3>
          <p className="text-lg text-slate-600">
            A selection of projects where I applied data science and engineering to solve complex problems in security and healthcare.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;