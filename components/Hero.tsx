import React, { useRef } from 'react';
import { ChevronRight, PlayCircle } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Abstract Background Element - Floating Blob */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
          opacity: [0.4, 0.5, 0.4] 
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-100 to-zinc-50 rounded-full blur-[100px] -z-10 pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center z-10">
        
        <Reveal width="fit-content" delay={0.1}>
          <div className="inline-flex items-center space-x-2 border border-zinc-200 bg-zinc-50/50 backdrop-blur-sm rounded-full px-3 py-1 mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Indus Minds Flagship</span>
          </div>
        </Reveal>

        <Reveal delay={0.2} blur>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-zinc-900 mb-6 leading-[1.05]">
            Industrial GPT. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-200">The Brain of Your Factory.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.4} width="fit-content">
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-500 font-light leading-relaxed mb-10">
            A next-generation neural engine designed to optimize, predict, and control industrial operations with mathematical precision.
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button className="group bg-zinc-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105 duration-300">
              Book a Demo
              <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button className="group bg-white border border-zinc-200 text-zinc-900 px-8 py-4 rounded-full text-sm font-medium hover:bg-zinc-50 transition-all flex items-center gap-2 hover:scale-105 duration-300">
              <PlayCircle size={16} className="text-zinc-400 group-hover:text-zinc-900 transition-colors" />
              Watch Overview
            </button>
          </div>
        </Reveal>

        {/* Hero Visual with Parallax */}
        <motion.div 
          style={{ y, opacity }}
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="mt-20 relative w-full max-w-5xl"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-zinc-100 bg-zinc-50 relative aspect-[16/9] group">
            <img 
              src="https://picsum.photos/seed/factoryai/1600/900?grayscale" 
              alt="Industrial GPT Interface" 
              className="w-full h-full object-cover opacity-90 transition-transform duration-[2s] ease-out group-hover:scale-105"
            />
            
            {/* Overlay UI Mockup Elements - Floating Cards */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="absolute bottom-8 left-8 right-8 flex justify-between items-end"
            >
                <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg max-w-sm hidden md:block hover:bg-white/90 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">System Status</span>
                    </div>
                    <div className="text-2xl font-semibold text-zinc-900">Optimal Performance</div>
                    <p className="text-zinc-500 text-sm mt-1">Predictive maintenance scheduled for Turbine 4B in 48 hours.</p>
                </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-300 to-transparent"></div>
      </motion.div>
    </section>
  );
}
