import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-12 text-balance leading-none">
          READY TO BUILD<br/>
          <span className="text-gray-500">SOMETHING BIG?</span>
        </h2>
        
        <a 
          href="#contact" 
          className="inline-flex items-center justify-center space-x-2 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors duration-300 hover:scale-105 transform"
        >
          <span>START A PROJECT</span>
          <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
}
