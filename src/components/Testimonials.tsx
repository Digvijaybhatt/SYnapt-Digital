import React from 'react';
import { testimonialsData } from '../data/testimonials';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#050505] border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">
          WHAT CLIENTS SAY.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] flex flex-col justify-between relative"
            >
              <Quote size={40} className="text-white/5 absolute top-6 right-6" />
              <p className="text-gray-300 leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-white font-display tracking-wide">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
