import React from 'react';
import { motion } from 'motion/react';
import { projectsData } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  return (
    <section id="work" className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-4 text-outline">
              SELECTED WORK.
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-md text-balance">
              Ideas are easy.<br/>
              Execution is where things get interesting.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
              2024—2026 Archive
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projectsData.map((project, index) => (
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group block relative ${index % 2 === 1 ? 'md:mt-24' : ''}`}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-900 mb-8 border border-white/10">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Result Tag */}
                {project.result && (
                  <div className="absolute top-6 left-6 z-20 bg-white text-black px-4 py-2 rounded-full font-bold text-sm shadow-xl transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {project.result}
                  </div>
                )}
                
                {/* View Project Button (Overlay) */}
                <div className="absolute bottom-6 right-6 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight size={24} />
                </div>
              </div>

              {/* Text Content */}
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-display font-medium group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-gray-500 font-medium tracking-wider uppercase border border-white/10 px-3 py-1 rounded-full">
                    {project.category.split('/')[0].trim()}
                  </span>
                </div>
                <p className="text-gray-400 text-lg mb-4 text-balance">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, i) => (
                    <span key={i} className="text-sm text-gray-500">
                      {service}{i < project.services.length - 1 ? ' •' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
