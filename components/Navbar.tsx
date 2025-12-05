import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  // Premium opacity/blur transition based on scroll position
  const navBackgroundOpacity = useTransform(scrollY, [0, 50], [0, 0.85]);
  const navBackdropBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(16px)"]);
  const borderOpacity = useTransform(scrollY, [0, 50], [0, 1]);

  // Handle scroll state for other interactions
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (window.scrollY > 50 && isMobileOpen) {
          setIsMobileOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileOpen]);

  const navLinks = [
    { name: "Product", href: "#features" },
    { name: "How it Works", href: "#workflow" },
    { name: "Impact", href: "#impact" },
    { name: "About", href: "#about" },
  ];

  // Custom Smooth Scroll Handler
  // Fixes the "buffering" feel by taking control of the scroll event
  // and ensuring exact offset positioning.
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 100; // Header height + padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        backgroundColor: `rgba(255, 255, 255, ${navBackgroundOpacity.get()})` as any, // Type cast for motion value compatibility
        backdropFilter: navBackdropBlur as any,
      }}
      className="fixed top-0 w-full z-50 transition-all duration-500 border-b border-zinc-200/0"
    >
        {/* Dynamic Border */}
        <motion.div 
            style={{ opacity: borderOpacity }} 
            className="absolute bottom-0 left-0 w-full h-[1px] bg-zinc-200"
        />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 transition-all duration-300">
          
          {/* Logo */}
          <a href="#" className="flex-shrink-0 group relative z-50" onClick={(e) => handleNavClick(e, '#root')}>
            <span className="text-xl font-semibold tracking-tight text-zinc-900 transition-opacity">
              Indus Minds <span className="text-zinc-400 font-light hidden sm:inline ml-2">| Industrial GPT</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-zinc-900 transition-all duration-300 ease-out group-hover:w-full opacity-0 group-hover:opacity-100"></span>
              </a>
            ))}
            
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="bg-zinc-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors shadow-lg hover:shadow-xl cursor-pointer"
            >
              Book Demo
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-zinc-900 p-2 focus:outline-none hover:bg-zinc-100 rounded-full transition-colors"
            >
              <AnimatePresence mode="wait">
                 {isMobileOpen ? (
                     <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                     >
                        <X size={24} />
                     </motion.div>
                 ) : (
                     <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                     >
                        <Menu size={24} />
                     </motion.div>
                 )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-zinc-200 overflow-hidden absolute top-full left-0 w-full shadow-2xl"
          >
            <div className="px-6 py-8 space-y-6 flex flex-col items-center">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  href={link.href}
                  onClick={(e: any) => handleNavClick(e, link.href)}
                  className="text-xl font-medium text-zinc-800 hover:text-zinc-500"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.3 }}
                 href="#contact"
                 onClick={(e: any) => handleNavClick(e, '#contact')}
                 className="mt-6 w-full max-w-xs text-center bg-zinc-900 text-white px-6 py-4 rounded-full text-lg font-medium shadow-lg"
                 whileTap={{ scale: 0.95 }}
              >
                Book Demo
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}