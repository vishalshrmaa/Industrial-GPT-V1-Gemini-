import React from 'react';
import { Reveal } from './ui/Reveal';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-900 mb-8">
            Bring Intelligence <br /> to Your Factory.
          </h2>
        </Reveal>
        
        <Reveal delay={0.2}>
          <p className="text-xl text-zinc-500 mb-12 max-w-2xl mx-auto font-light">
            Ready to deploy? Schedule a consultation with our industrial automation architects today.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-zinc-900 text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-zinc-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-300">
              Book Strategy Call
            </button>
            <button className="bg-white border border-zinc-200 text-zinc-900 px-10 py-5 rounded-full text-lg font-medium hover:bg-zinc-50 transition-all">
              Contact Sales
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}