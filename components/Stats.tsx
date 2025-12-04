import React, { useEffect, useRef, useState } from 'react';
import { useInView, motion, useSpring, useTransform } from 'framer-motion';
import { Reveal } from './ui/Reveal';

const stats = [
  { value: 40, suffix: "%", label: "Reduction in Downtime" },
  { value: 20, suffix: "%", label: "Throughput Increase" },
  { value: 18, suffix: "%", label: "Energy Savings" },
  { value: 7, suffix: " Days", label: "Average Deployment Time" },
];

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  
  const springValue = useSpring(0, {
    damping: 30,
    stiffness: 100,
    duration: 2
  });

  useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [inView, value, springValue]);

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  return (
    <span ref={ref} className="flex">
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
};

export default function Stats() {
  return (
    <section id="impact" className="py-32 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-zinc-800 pt-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <Reveal delay={index * 0.1} width="100%">
                <span className="text-6xl md:text-7xl font-semibold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-br from-white to-zinc-500 flex items-center">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-zinc-400 font-medium text-sm uppercase tracking-wide border-l border-zinc-700 pl-4 block">
                  {stat.label}
                </span>
              </Reveal>
            </div>
          ))}
        </div>
        
        <Reveal delay={0.4}>
            <div className="mt-24 text-center">
                <p className="text-zinc-500 text-sm uppercase tracking-widest mb-4">Trusted by Leaders In</p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.1 }}
                        className="flex gap-8 md:gap-16 flex-wrap justify-center items-center grayscale hover:grayscale-0 transition-all duration-500"
                    >
                        {/* Improved typography for logos to look more like logos */}
                        <span className="text-xl font-semibold font-serif text-white/70">TATA Motors</span>
                        <span className="text-xl font-bold italic text-white/70">Mahindra</span>
                        <span className="text-xl font-bold tracking-widest text-white/70">L&T</span>
                        <span className="text-xl font-medium text-white/70">Bharat Forge</span>
                    </motion.div>
                </div>
            </div>
        </Reveal>
      </div>
    </section>
  );
}
