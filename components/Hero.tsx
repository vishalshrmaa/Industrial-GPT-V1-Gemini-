import React from 'react';
import { ChevronRight, PlayCircle } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Abstract Background Element - Floating Blob */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          rotate: [0, 10, 0],
          opacity: [0.3, 0.4, 0.3] 
        }}
        transition={{ 
          duration: 20, // Very slow "breathing" rhythm
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-100/50 to-zinc-50/50 rounded-full blur-[120px] -z-10 pointer-events-none" 
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
            <button className="group bg-zinc-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
              Book a Demo
              <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>
            <button className="group bg-white border border-zinc-200 text-zinc-900 px-8 py-4 rounded-full text-sm font-medium hover:bg-zinc-50 transition-all flex items-center gap-2 hover:scale-105 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
              <PlayCircle size={16} className="text-zinc-400 group-hover:text-zinc-900 transition-colors duration-300" />
              Watch Overview
            </button>
          </div>
        </Reveal>

        {/* Hero Visual - Static */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 relative w-full max-w-5xl"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-zinc-100 bg-zinc-50 relative aspect-[16/9]">
            <img 
              src="https://images.unsplash.com/photo-1565514020176-db79237b6009?q=80&w=2070&auto=format&fit=crop" 
              alt="Industrial GPT Interface" 
              className="w-full h-full object-cover opacity-90"
            />
            
            {/* Overlay UI Mockup Elements - Floating Cards */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
            
            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-8 left-8 right-8 flex justify-between items-end"
            >
                <div className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl border border-white/50 shadow-2xl max-w-sm hidden md:block">
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
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-300 to-transparent"></div>
      </motion.div>
    </section>
  );
}