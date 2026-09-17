import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

// Custom hook for animating numbers
function useAnimatedNumber(end: number, duration: number = 2000, startInView: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!startInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setValue(Math.floor(easeProgress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, startInView]);

  return value;
}

interface StatProps {
  prefix?: string;
  end: number;
  suffix?: string;
  label: string;
  decimals?: boolean;
}

const Stat = ({ prefix = "", end, suffix = "", label, decimals = false }: StatProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const currentVal = easeProgress * end;
      
      setDisplayValue(
        decimals 
          ? currentVal.toFixed(1)
          : Math.floor(currentVal).toString()
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, isInView, decimals]);

  return (
    <div ref={ref} className="flex flex-col border-l border-white/20 pl-6 py-2">
      <div className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-2 flex items-center">
        <span className="text-gray-400 font-light">{prefix}</span>
        <span>{displayValue}</span>
        <span className="text-gray-400 font-light">{suffix}</span>
      </div>
      <div className="text-sm tracking-widest text-gray-500 uppercase font-semibold">
        {label}
      </div>
    </div>
  );
};

export default function Results() {
  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
          
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-balance">
              WE DON'T JUST SHIP PROJECTS.<br/>
              WE MOVE NUMBERS.
            </h2>
            <p className="text-gray-400 text-lg">
              Beautiful design means nothing if it doesn't drive business. We combine creative execution with data-driven strategy to deliver measurable growth.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-16 w-full lg:w-auto flex-shrink-0">
            <Stat prefix="+" end={124} suffix="%" label="Organic Traffic" />
            <Stat prefix="+" end={68} suffix="%" label="Conversions" />
            <Stat end={3.4} suffix="×" label="Avg ROAS" decimals={true} />
            <Stat prefix="+" end={85} suffix="%" label="Leads Generated" />
          </div>

        </div>
      </div>
    </section>
  );
}
