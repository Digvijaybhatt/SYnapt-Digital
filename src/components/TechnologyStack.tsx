import React from 'react';
import { technologiesData } from '../data/technologies';

export default function TechnologyStack() {
  return (
    <section className="py-24 bg-[#050505] border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <h2 className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-16">
          BUILT WITH.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {technologiesData.map((category, index) => (
            <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-white/40 text-xs font-bold tracking-[0.2em] mb-6 border-b border-white/10 pb-2 w-full">
                {category.category}
              </h3>
              <ul className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="text-gray-300 font-medium text-sm bg-white/5 px-3 py-1 rounded-md border border-white/5">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
