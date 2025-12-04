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
  duration = 0.9, 
  yOffset = 30,
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
      filter: blur ? "blur(12px)" : "blur(0px)",
      scale: blur ? 0.98 : 1
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
        transition={{ 
          duration: duration, 
          delay: delay, 
          ease: [0.2, 0.65, 0.3, 0.9] // Smooth, refined easing
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
