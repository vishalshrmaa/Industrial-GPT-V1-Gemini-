import React, { useRef } from 'react';
import { Reveal } from './ui/Reveal';
import { ArrowDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    step: "01",
    title: "Data Intake",
    desc: "Ingests streams from IoT sensors, PLCs, and ERP systems securely."
  },
  {
    step: "02",
    title: "Neural Analysis",
    desc: "Proprietary models identify patterns invisible to the human eye."
  },
  {
    step: "03",
    title: "Prediction",
    desc: "Forecasts breakdowns, bottlenecks, and quality issues."
  },
  {
    step: "04",
    title: "Automated Action",
    desc: "Adjusts machine parameters in real-time to close the loop."
  }
];

export default function Workflow() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="workflow" className="py-32 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal width="100%">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 border-b border-zinc-100 pb-12">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 max-w-xl">
              From raw data to <br /> autonomous execution.
            </h2>
            <p className="text-zinc-500 mt-6 md:mt-0 max-w-xs">
              A continuous loop of learning and improvement, deployable in days.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
           {/* Decorative Line for Desktop */}
           <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-zinc-100 -z-10">
              <motion.div 
                style={{ width: lineHeight }}
                className="h-full bg-zinc-900 origin-left"
              />
           </div>

          {steps.map((item, index) => (
            <Reveal key={index} delay={index * 0.2} blur>
              <div className="relative pt-8 md:pt-0 group">
                <div className="w-3 h-3 bg-zinc-200 group-hover:bg-zinc-900 transition-colors duration-500 rounded-full mb-6 hidden md:block border-4 border-white box-content relative z-10 shadow-sm"></div>
                
                <span className="text-6xl font-semibold text-zinc-50 absolute -top-4 left-0 -z-10 md:relative md:text-zinc-200 md:text-sm md:font-mono md:mb-4 block transition-colors group-hover:text-zinc-300">
                  {item.step}
                </span>

                <h3 className="text-xl font-semibold text-zinc-900 mb-3 mt-4 md:mt-0 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-700 transition-colors">
                  {item.desc}
                </p>
                
                {index < steps.length - 1 && (
                    <div className="md:hidden mt-8 flex justify-center text-zinc-200">
                        <ArrowDown size={24} />
                    </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
        
        {/* Large Visual Representation */}
        <Reveal delay={0.6} blur>
            <div className="mt-24 w-full h-[400px] bg-zinc-900 rounded-3xl overflow-hidden relative flex items-center justify-center group">
                 <motion.div 
                    className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-700"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 2 }}
                 >
                     <img src="https://picsum.photos/seed/server/1200/400?grayscale" className="w-full h-full object-cover" alt="Data processing" />
                 </motion.div>
                 <div className="relative z-10 text-center">
                     <span className="inline-block px-4 py-1 rounded-full border border-white/20 text-white/80 text-xs tracking-widest uppercase mb-4 backdrop-blur-sm">Live System</span>
                     <h3 className="text-3xl md:text-5xl font-medium text-white tracking-tight">Seamless Integration</h3>
                 </div>
            </div>
        </Reveal>

      </div>
    </section>
  );
}
