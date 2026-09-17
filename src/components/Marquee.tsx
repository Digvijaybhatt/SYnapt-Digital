import React from 'react';
import { motion } from 'motion/react';

export default function Marquee() {
  const items = [
    "WEB DEVELOPMENT",
    "WEB DESIGN",
    "APP DEVELOPMENT",
    "SEO",
    "GOOGLE ADS",
    "META ADS",
    "VIDEO",
    "MOTION",
    "BRANDING",
    "AI",
    "AUTOMATION"
  ];

  return (
    <div className="py-12 border-y border-white/10 bg-[#050505] overflow-hidden flex whitespace-nowrap relative">
      {/* Left/Right fading edges */}
      <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

      <motion.div 
        className="flex space-x-12 px-6 items-center hover:cursor-default"
        animate={{ x: [0, -1035] }} // Approximated width to loop
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 20 
        }}
        whileHover={{ animationPlayState: 'paused' }} // Motion doesn't directly support this via props easily without custom hooks, we'll rely on CSS if needed or just let it run. We can actually do this with CSS for better perf.
      >
        <div className="flex space-x-12 items-center">
            {items.map((item, index) => (
              <div key={index} className="flex items-center space-x-12">
                <span className="text-2xl md:text-4xl font-display font-medium text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>
                  {item}
                </span>
                <span className="text-white/20 text-xl text-center">✦</span>
              </div>
            ))}
        </div>
        <div className="flex space-x-12 items-center ml-12">
            {items.map((item, index) => (
              <div key={`duplicate-${index}`} className="flex items-center space-x-12">
                <span className="text-2xl md:text-4xl font-display font-medium text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>
                  {item}
                </span>
                <span className="text-white/20 text-xl text-center">✦</span>
              </div>
            ))}
        </div>
      </motion.div>
    </div>
  );
}
