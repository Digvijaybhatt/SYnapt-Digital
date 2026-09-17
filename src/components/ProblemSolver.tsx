import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { problemsData } from '../data/problems';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ProblemSolver() {
  const [activeProblem, setActiveProblem] = useState<string | null>(null);

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-center md:text-left">
            WHAT ARE YOU TRYING TO SOLVE?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Problems List */}
          <div className="flex flex-col space-y-3">
            {problemsData.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveProblem(activeProblem === item.id ? null : item.id)}
                className={`text-left px-6 py-5 rounded-xl border transition-all duration-300 ${
                  activeProblem === item.id 
                    ? 'border-white bg-white/5 shadow-[0_0_30px_rgba(255,255,255,0.05)]' 
                    : 'border-white/10 hover:border-white/30 hover:bg-white/[0.02]'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className={`text-lg md:text-xl font-medium tracking-wide ${activeProblem === item.id ? 'text-white' : 'text-gray-400'}`}>
                    {item.problem}
                  </span>
                  <motion.div
                    animate={{ rotate: activeProblem === item.id ? 90 : 0 }}
                  >
                    <ArrowRight className={activeProblem === item.id ? 'text-white' : 'text-gray-600'} size={20} />
                  </motion.div>
                </div>
              </button>
            ))}
          </div>

          {/* Solution Panel */}
          <div className="relative rounded-2xl border border-white/10 bg-[#050505] p-8 md:p-12 min-h-[400px] flex flex-col justify-center overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <AnimatePresence mode="wait">
              {activeProblem ? (
                <motion.div
                  key={activeProblem}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="relative z-10"
                >
                  <div className="flex items-center space-x-2 text-sm text-gray-400 font-semibold uppercase tracking-widest mb-8">
                    <Sparkles size={16} />
                    <span>Recommended Solution</span>
                  </div>
                  
                  <h3 className="text-3xl font-display font-medium mb-8">
                    {problemsData.find(p => p.id === activeProblem)?.problem}
                  </h3>
                  
                  <div className="flex flex-wrap gap-3 mb-12">
                    {problemsData.find(p => p.id === activeProblem)?.services.map((service, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 rounded-full border border-white/20 text-sm bg-white/5 text-gray-200"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <a 
                    href="https://calendly.com/digvijaybhatt6/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-black bg-white px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
                  >
                    <span>LET'S SOLVE IT</span>
                    <ArrowRight size={16} />
                  </a>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center h-full relative z-10 text-gray-500"
                >
                  <Sparkles size={48} className="mb-4 opacity-20" />
                  <p className="text-xl font-light">Select a challenge on the left to see how we can help.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
