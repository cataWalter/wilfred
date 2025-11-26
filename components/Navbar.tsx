'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Photography', href: '/photography' },
    { name: 'Translations', href: '/translations' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen ? 'bg-stone-50/90 backdrop-blur-md py-3 border-b border-stone-200' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="group relative z-50" onClick={() => setIsOpen(false)}>
            <span className="font-serif text-2xl md:text-3xl tracking-tight font-medium text-stone-900">
              Wilfred
              <span className="text-stone-400 group-hover:text-stone-600 transition-colors">.</span>
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm uppercase tracking-widest hover:text-stone-500 transition-colors relative ${
                  pathname === link.href ? 'text-black font-medium' : 'text-stone-600'
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-black" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden z-50 p-2 -mr-2 text-stone-900 active:scale-95 transition-transform"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-stone-100 z-40 pt-24 px-6 pb-6 flex flex-col overflow-y-auto"
          >
            <nav className="flex flex-col space-y-8 mt-8">
              {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-4xl sm:text-5xl text-stone-800 hover:text-stone-500 transition-colors border-b border-stone-200 pb-4"
                >
                  <span className="text-sm font-sans font-bold text-stone-400 block mb-2 uppercase tracking-widest">0{i+1}</span>
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div className="mt-auto pt-12 text-stone-400 text-sm uppercase tracking-widest">
              <p>Based in Italy</p>
              <p className="mt-2">&copy; Wilfred</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
