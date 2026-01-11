import React from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const Icon = project.icon;

  return (
    <div className="group bg-white rounded-xl border border-slate-200 hover:border-brand-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden">
      
      {/* Card Header */}
      <div className="p-6 pb-4">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-blue-50 text-brand-600 rounded-lg group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
            <Icon size={24} />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-1 rounded">
            {project.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Key Metrics / Stats */}
        <div className="grid grid-cols-2 gap-4 py-4 border-t border-slate-100 border-b mb-4">
          {project.stats.map((stat, index) => (
            <div key={index}>
              <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span key={tech} className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded-md border border-slate-200">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer / Actions */}
      <div className="mt-auto px-6 pb-6 pt-0 flex gap-4">
        <a 
          href={project.links.github} 
          className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors"
        >
          <Github size={16} />
          Code
        </a>
        <a 
          href={project.links.demo} 
          className="flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
        >
          Case Study
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;