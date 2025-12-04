import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Stats from './components/Stats';
import Industries from './components/Industries';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main className="w-full bg-white relative">
      <Navbar />
      <Hero />
      <Features />
      <Workflow />
      <Industries />
      <Stats />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;