import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { servicesData } from '../data/services';
import { Plus, Minus } from 'lucide-react';

export default function Services() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null); // For mobile

  return (
    <section id="services" className="py-32 relative bg-[#050505]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight max-w-3xl text-balance">
            WE BUILD THE DIGITAL LAYER OF YOUR BUSINESS.
          </h2>
        </div>

        <div className="flex flex-col border-t border-white/10">
          {servicesData.map((service, index) => (
            <div 
              key={service.id}
              className="border-b border-white/10 group"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Desktop View */}
              <div className="hidden lg:grid grid-cols-12 gap-8 py-12 items-start relative transition-colors duration-500 hover:bg-white/[0.02]">
                <div className="col-span-1 text-xl font-display text-gray-500 font-light">
                  {service.id}
                </div>
                
                <div className="col-span-4">
                  <h3 className="text-4xl font-display font-medium group-hover:pl-4 transition-all duration-300">
                    {service.title}
                  </h3>
                </div>

                <div className="col-span-7">
                  <motion.div 
                    initial={false}
                    animate={{ height: hoveredId === service.id ? 'auto' : '0px', opacity: hoveredId === service.id ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-xl text-gray-400 mb-8 max-w-xl text-balance leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
                      {service.items.map((item, i) => (
                        <li key={i} className="text-lg text-gray-200 flex items-center space-x-3">
                          <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>

              {/* Mobile View */}
              <div className="lg:hidden">
                <button 
                  onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
                  className="w-full text-left py-8 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-6">
                    <span className="text-sm font-display text-gray-500">{service.id}</span>
                    <span className="text-2xl font-display font-medium">{service.title}</span>
                  </div>
                  {expandedId === service.id ? <Minus size={20} /> : <Plus size={20} />}
                </button>
                
                <AnimatePresence>
                  {expandedId === service.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pb-8"
                    >
                      <p className="text-gray-400 mb-6 text-balance">
                        {service.description}
                      </p>
                      <ul className="flex flex-col space-y-3">
                        {service.items.map((item, i) => (
                          <li key={i} className="text-gray-200 flex items-center space-x-3 text-sm">
                            <span className="w-1 h-1 bg-white rounded-full"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
