import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on mobile/tablet
    if (window.innerWidth <= 768) return;
    
    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for links/buttons
      if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
        setIsHoveringLink(true);
        
        // Special logic for portfolio or specific CTAs if classes are added
        if (target.closest('#work a')) {
           setHoverText("VIEW");
        } else if (target.closest('a[href*="calendly.com"]') && target.closest('section:not(header)')) {
           setHoverText("GO");
        } else {
           setHoverText("");
        }
      } else {
        setIsHoveringLink(false);
        setHoverText("");
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      width: 16,
      height: 16,
      backgroundColor: "rgba(255, 255, 255, 1)",
      mixBlendMode: "difference" as const,
    },
    hover: {
      x: mousePosition.x - (hoverText ? 40 : 24),
      y: mousePosition.y - (hoverText ? 40 : 24),
      width: hoverText ? 80 : 48,
      height: hoverText ? 80 : 48,
      backgroundColor: "rgba(255, 255, 255, 1)",
      mixBlendMode: hoverText ? "normal" as const : "difference" as const,
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center text-black font-bold text-sm tracking-widest shadow-lg"
      variants={variants}
      animate={isHoveringLink ? "hover" : "default"}
      transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      style={{
        translateX: 0,
        translateY: 0
      }}
    >
      <AnimatePresence>
        {hoverText && (
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute"
          >
            {hoverText}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Inline AnimatePresence since we need it here
import { AnimatePresence } from 'motion/react';
