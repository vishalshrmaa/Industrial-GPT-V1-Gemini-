import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Product", href: "#features" },
    { name: "How it Works", href: "#workflow" },
    { name: "Impact", href: "#impact" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileOpen ? "bg-white/80 backdrop-blur-md border-b border-zinc-100" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <span className="text-lg font-semibold tracking-tight text-zinc-900">
              Indus Minds <span className="text-zinc-400 font-light">| Industrial GPT</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors uppercase tracking-wide"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-zinc-900 text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-zinc-800 transition-all"
              >
                Book Demo
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-zinc-800 hover:text-zinc-600 focus:outline-none"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-white border-b border-zinc-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
               href="#contact"
               className="block w-full text-center mt-4 bg-zinc-900 text-white px-3 py-3 rounded-lg text-base font-medium"
               onClick={() => setIsMobileOpen(false)}
            >
              Book Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}