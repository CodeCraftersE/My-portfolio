
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-teal-400 font-mono text-sm tracking-widest mb-4 uppercase">.builtWorks()</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-poppins">Featured Projects</h3>
          </div>
          <a href={PROJECTS[0].githubLink} className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            View All GitHub <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group flex flex-col bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-teal-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] uppercase tracking-wider font-bold bg-teal-500/10 text-teal-400 px-2 py-1 rounded border border-teal-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h4 className="text-xl font-bold mb-3 group-hover:text-teal-400 transition-colors">{project.title}</h4>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex gap-4 mt-auto">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-sm font-bold bg-white text-black px-4 py-2 rounded-lg hover:bg-teal-400 transition-colors"
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                  )}
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-sm font-bold border border-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Code <Github size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
