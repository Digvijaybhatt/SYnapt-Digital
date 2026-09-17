import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Simple abstract fluid/particle effect for background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000); // Responsive amount
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, i) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        // Draw connecting lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
      />
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-noise z-0 pointer-events-none"></div>
      
      {/* Subtle Gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-start justify-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block border border-white/20 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="text-xs font-semibold tracking-widest text-gray-300 uppercase">
              Creative Technology × Digital Growth
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tighter mb-8 text-balance"
          >
            <span className="block text-outline">WE BUILD.</span>
            <span className="block">WE CREATE.</span>
            <span className="block text-gray-400">WE GROW.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 font-light text-balance"
          >
            Digital experiences, brands and growth systems built for businesses ready to move faster.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a 
              href="https://calendly.com/digvijaybhatt6/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-gray-200 transition-colors duration-300"
            >
              <span>START A PROJECT</span>
              <ArrowRight size={18} />
            </a>
            <a 
              href="#work" 
              className="w-full sm:w-auto text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:text-gray-300 transition-colors duration-300"
            >
              <span>EXPLORE OUR WORK</span>
              <ArrowDown size={18} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
