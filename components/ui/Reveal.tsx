import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';

interface RevealProps {
  children?: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  yOffset?: number;
  blur?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = "100%", 
  delay = 0, 
  duration = 1.0, // Increased duration for smoother 'gliding' feel
  yOffset = 20, // Reduced offset for subtle movement
  blur = false
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      y: yOffset,
      filter: blur ? "blur(8px)" : "blur(0px)",
      scale: blur ? 0.96 : 1
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      scale: 1
    },
  };

  return (
    <div ref={ref} style={{ position: "relative", width }}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        style={{ willChange: "transform, opacity, filter" }} 
        transition={{ 
          duration: duration, 
          delay: delay, 
          // Apple-style ease-out-quint / ease-out-expo
          // Starts fast, decelerates extremely slowly for a premium 'settling' effect
          ease: [0.22, 1, 0.36, 1] 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};