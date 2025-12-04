import React from 'react';
import { Activity, Brain, Box, Zap, ScanEye, Database } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const features = [
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Predictive Maintenance",
    desc: "AI foresees failures weeks before they occur, eliminating downtime."
  },
  {
    icon: <Box className="w-6 h-6" />,
    title: "Robotics Control",
    desc: "Seamless orchestration of robotic arms and AGVs in real-time."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Energy Efficiency",
    desc: "Dynamic load balancing to reduce factory energy consumption by up to 18%."
  },
  {
    icon: <ScanEye className="w-6 h-6" />,
    title: "Quality Vision",
    desc: "Computer vision that detects micron-level defects at production speed."
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Data Integration",
    desc: "Unified layer connecting legacy SCADA systems with modern cloud infrastructure."
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Digital Twin",
    desc: "High-fidelity simulations to test production changes virtually first."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-32 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-24 md:text-center max-w-3xl mx-auto">
          <Reveal blur>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-6">
              Intelligence in every layer.
            </h2>
          </Reveal>
          <Reveal delay={0.1} blur>
            <p className="text-xl text-zinc-500 font-light leading-relaxed">
              Industrial GPT isn't just a dashboard. It's an active intelligence layer that sits on top of your existing infrastructure, turning raw data into autonomous action.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 0.1} blur>
              <div className="group bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500 h-full flex flex-col justify-between hover:-translate-y-2">
                <div>
                  <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-900 mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-500 ease-out">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-500 leading-relaxed text-sm group-hover:text-zinc-600">
                    {feature.desc}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-zinc-50">
                   <span className="text-xs font-semibold text-zinc-300 group-hover:text-zinc-900 transition-colors uppercase tracking-widest">
                     Module 0{index + 1}
                   </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
