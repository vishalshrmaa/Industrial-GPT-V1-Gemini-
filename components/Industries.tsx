import React from 'react';
import { Reveal } from './ui/Reveal';
import { ArrowRight } from 'lucide-react';

const industries = [
  { 
    name: "Automotive", 
    img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop",
    desc: "Deploy AI-driven optimization tailored for automotive workflows."
  },
  { 
    name: "Electronics", 
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    desc: "Precision defect detection for micro-electronics and PCB assembly."
  },
  { 
    name: "Textiles", 
    img: "https://images.unsplash.com/photo-1628131336054-923f993d56a3?q=80&w=2070&auto=format&fit=crop",
    desc: "Optimize loom efficiency and reduce material waste in real-time."
  },
  { 
    name: "Pharmaceuticals", 
    img: "https://images.unsplash.com/photo-1579165466741-7f35a4755657?q=80&w=2070&auto=format&fit=crop",
    desc: "Ensure 100% compliance and batch consistency with vision AI."
  }
];

export default function Industries() {
  return (
    <section className="py-32 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-4">
                Built for Indian Industry.
              </h2>
              <p className="text-zinc-500 max-w-xl">
                Scalable architectures designed to handle the complexity of massive supply chains and MSME floors alike.
              </p>
            </div>
            <a href="#contact" className="hidden md:flex items-center gap-2 text-zinc-900 font-medium hover:text-zinc-600 transition-colors">
                View all sectors <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>

        {/* Increased height for better image visibility */}
        <div className="flex flex-col md:flex-row gap-4 h-[600px]">
          {industries.map((ind, index) => (
            <div 
                key={index} 
                className="group relative flex-1 hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-700 z-10"></div>
              
              {/* Image with slow cinematic zoom and object-center to keep focus */}
              <img 
                src={ind.img} 
                alt={ind.name} 
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              />
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                {/* Title Slides Up */}
                <h3 className="text-white text-2xl font-semibold tracking-tight transform transition-transform duration-500 ease-out group-hover:-translate-y-2">
                    {ind.name}
                </h3>
                
                {/* Description Slides Up and Fades In */}
                <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-700 ease-out">
                    <p className="text-zinc-200 text-sm mt-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-75 ease-out max-w-sm">
                      {ind.desc}
                    </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}