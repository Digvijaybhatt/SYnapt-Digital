import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      desc: "Understand the business, audience and opportunity."
    },
    {
      num: "02",
      title: "STRATEGIZE",
      desc: "Define the roadmap and technical architecture."
    },
    {
      num: "03",
      title: "DESIGN",
      desc: "Create the experience and visual system."
    },
    {
      num: "04",
      title: "BUILD",
      desc: "Develop the website, app, product or system."
    },
    {
      num: "05",
      title: "LAUNCH",
      desc: "Test, deploy and optimize for performance."
    },
    {
      num: "06",
      title: "GROW",
      desc: "SEO, advertising, analytics and CRO."
    }
  ];

  return (
    <section id="process" className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-24 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-display font-bold leading-none tracking-tight">
            FROM IDEA<br/>
            <span className="text-gray-500">TO IMPACT.</span>
          </h2>
        </div>

        <div ref={containerRef} className="relative">
          {/* Desktop Progress Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[1px] bg-white/10 z-0">
            <motion.div 
              className="h-full bg-white"
              style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
            />
          </div>

          {/* Mobile Progress Line */}
          <div className="md:hidden absolute top-0 bottom-0 left-6 w-[1px] bg-white/10 z-0">
             <motion.div 
              className="w-full bg-white"
              style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-12 md:gap-4 relative z-10 pl-16 md:pl-0">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col relative">
                {/* Number Indicator */}
                <div className="w-12 h-12 rounded-full bg-[#050505] border border-white/20 flex items-center justify-center font-display font-bold text-lg mb-6 shadow-[0_0_15px_rgba(0,0,0,1)] absolute -left-16 md:relative md:left-0 md:mb-8">
                  {step.num}
                </div>
                
                <h3 className="text-xl font-display font-medium mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 text-balance leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
