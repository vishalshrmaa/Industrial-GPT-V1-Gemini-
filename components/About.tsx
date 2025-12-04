import React from 'react';
import { Reveal } from './ui/Reveal';

export default function About() {
  return (
    <section id="about" className="py-32 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <Reveal>
            <div className="relative">
                 <div className="aspect-[4/5] rounded-lg overflow-hidden bg-zinc-100">
                     <img src="https://picsum.photos/seed/engineer/800/1000?grayscale" alt="Indus Minds Team" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
                 </div>
                 <div className="absolute -bottom-8 -right-8 bg-white p-8 shadow-xl rounded-lg max-w-xs border border-zinc-50 hidden md:block">
                     <p className="font-serif italic text-zinc-900 text-lg">"We are building India's Industrial AI Stack."</p>
                 </div>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div>
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">About Indus Minds</h2>
              <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-8 leading-tight">
                Digitizing the backbone of the economy.
              </h3>
              <div className="space-y-6 text-zinc-500 text-lg font-light leading-relaxed">
                <p>
                  Indus Minds was founded with a singular mission: to bring the power of Generative AI to the factory floor. We believe that the next industrial revolution won't be about hardware, but about intelligence.
                </p>
                <p>
                  Our team comprises deep-tech engineers, manufacturing veterans, and AI researchers working in unison to create systems that are not just smart, but mathematically precise and reliable enough for mission-critical operations.
                </p>
              </div>
              
              <div className="mt-12 flex gap-12">
                  <div>
                      <span className="block text-3xl font-bold text-zinc-900">50+</span>
                      <span className="text-sm text-zinc-500">Engineers</span>
                  </div>
                  <div>
                      <span className="block text-3xl font-bold text-zinc-900">3</span>
                      <span className="text-sm text-zinc-500">R&D Labs</span>
                  </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}