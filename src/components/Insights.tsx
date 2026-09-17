import React from 'react';
import { articlesData } from '../data/articles';
import { ArrowRight } from 'lucide-react';

export default function Insights() {
  return (
    <section id="insights" className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-balance">
            THINGS WE'RE<br/>THINKING ABOUT.
          </h2>
          <a href="#" className="hidden md:inline-flex items-center space-x-2 text-sm font-semibold tracking-widest uppercase text-gray-400 hover:text-white transition-colors">
            <span>VIEW ALL</span>
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articlesData.map((article) => (
            <a 
              key={article.id} 
              href={article.link}
              className={`group flex flex-col p-8 rounded-2xl border transition-all duration-300 h-full ${
                article.link === '#' ? 'cursor-default border-white/10 bg-[#0A0A0A]' : 'border-white/10 hover:border-white/30 hover:bg-white/[0.02] cursor-pointer bg-[#0A0A0A]'
              }`}
              onClick={(e) => {
                  if (article.link === '#') e.preventDefault();
              }}
            >
              <div className="flex justify-between items-center mb-6 text-xs font-semibold tracking-widest uppercase text-gray-500">
                <span>{article.category}</span>
                <span>{article.readTime}</span>
              </div>
              
              <h3 className="text-2xl font-display font-medium mb-4 group-hover:text-gray-300 transition-colors">
                {article.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {article.description}
              </p>

              <div className="flex justify-between items-center mt-auto pt-6 border-t border-white/10">
                <span className="text-xs text-gray-600">{article.date}</span>
                <span className="text-sm font-semibold flex items-center space-x-1 group-hover:translate-x-2 transition-transform duration-300">
                  <span>READ ARTICLE</span>
                  <ArrowRight size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
