import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function WhySynapt() {
  return (
    <section id="about" className="py-32 bg-[#0A0A0A]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-balance">
              ONE TEAM.<br/>
              MULTIPLE DISCIPLINES.<br/>
              ONE DIGITAL ECOSYSTEM.
            </h2>
            <p className="text-xl text-gray-400 mb-6 font-light leading-relaxed">
              You shouldn't need five different agencies to build one digital business.
            </p>
            <p className="text-xl text-gray-400 mb-12 font-light leading-relaxed">
              Synapt brings strategy, design, technology, content and growth together. We eliminate silos to create digital experiences that are cohesive, fast, and built to scale.
            </p>

            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              <div className="border-l border-white/20 pl-4">
                <h4 className="font-semibold text-sm tracking-widest uppercase mb-1">Strategy + Execution</h4>
                <p className="text-gray-500 text-sm">No disconnect between planning and building.</p>
              </div>
              <div className="border-l border-white/20 pl-4">
                <h4 className="font-semibold text-sm tracking-widest uppercase mb-1">Design + Technology</h4>
                <p className="text-gray-500 text-sm">Beautiful interfaces backed by robust code.</p>
              </div>
              <div className="border-l border-white/20 pl-4">
                <h4 className="font-semibold text-sm tracking-widest uppercase mb-1">Creative + Performance</h4>
                <p className="text-gray-500 text-sm">High-impact visuals that drive actual conversions.</p>
              </div>
              <div className="border-l border-white/20 pl-4">
                <h4 className="font-semibold text-sm tracking-widest uppercase mb-1">Data + Growth</h4>
                <p className="text-gray-500 text-sm">Every decision backed by analytics.</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-sm flex flex-col items-center">
              {/* Visual Ecosystem */}
              <div className="absolute inset-0 bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>
              
              <div className="w-full flex flex-col items-center space-y-4 relative z-10">
                {['STRATEGY', 'DESIGN', 'BUILD', 'CREATE', 'GROW', 'AUTOMATE'].map((item, i, arr) => (
                  <React.Fragment key={item}>
                    <div className="w-full text-center py-4 rounded-xl border border-white/10 bg-[#050505] font-display text-xl tracking-widest shadow-xl">
                      {item}
                    </div>
                    {i < arr.length - 1 && (
                      <ArrowDown className="text-gray-600" size={24} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
