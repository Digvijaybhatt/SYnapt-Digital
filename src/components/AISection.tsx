import React from 'react';
import { Sparkles, Cpu, Bot, Zap, Workflow, Search } from 'lucide-react';

export default function AISection() {
  const cards = [
    { title: "AI WEBSITE DEVELOPMENT", icon: <Cpu size={24} /> },
    { title: "AI AUTOMATION", icon: <Zap size={24} /> },
    { title: "AI CHATBOTS", icon: <Bot size={24} /> },
    { title: "AI MARKETING", icon: <Search size={24} /> },
    { title: "AI CONTENT SYSTEMS", icon: <Workflow size={24} /> },
    { title: "AI-POWERED PRODUCTS", icon: <Sparkles size={24} /> },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-[#0A0A0A]">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-[100%] pointer-events-none transform rotate-12"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase border border-white/20 rounded-full px-4 py-1.5 mb-8">
          <Sparkles size={14} />
          <span>The Next Era</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6 text-balance">
          AI ISN'T THE FUTURE.<br/>
          IT'S PART OF THE WORKFLOW.
        </h2>
        
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-16 font-light">
          We use AI to build faster, automate smarter and create better digital experiences. Stay ahead of the curve.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl border border-white/10 bg-[#050505]/50 backdrop-blur-sm hover:bg-white/[0.02] hover:border-white/20 transition-all duration-300 text-left group"
            >
              <div className="text-gray-500 mb-6 group-hover:text-white transition-colors duration-300">
                {card.icon}
              </div>
              <h3 className="text-lg font-medium font-display tracking-wide">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
