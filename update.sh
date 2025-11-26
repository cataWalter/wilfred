#!/bin/bash

# ==========================================
# WILFRED WEBSITE - MOBILE OPTIMIZATION
# Actions: Responsive font scaling, SVH fixes, Padding adjustments
# ==========================================

echo "📱 Optimizing for Mobile Devices..."

# 1. Update Navbar (Better mobile tap targets & backdrop)
cat << 'EOF' > components/Navbar.tsx
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
EOF

# 2. Update Home Page (Fixing huge text overflow)
# Using 'svh' ensures the hero fits perfectly on mobile screens with address bars.
cat << 'EOF' > app/page.tsx
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import FadeIn from '@/components/ui/FadeIn';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[85svh] flex flex-col justify-center px-6 md:px-12 max-w-screen-2xl mx-auto pt-20">
        <FadeIn>
          <p className="text-xs md:text-base uppercase tracking-[0.3em] text-stone-500 mb-6 md:mb-8">
            South Africa &mdash; Italy
          </p>
        </FadeIn>
        
        <FadeIn>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] md:leading-[0.9] text-stone-900 mb-10 md:mb-12">
            Capturing Light, <br />
            <span className="italic font-light text-stone-400">Translating Soul.</span>
          </h1>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <Link href="/photography" className="group flex items-center gap-4 text-base md:text-lg bg-stone-900 text-white sm:bg-transparent sm:text-stone-900 px-6 py-3 sm:p-0 rounded-full sm:rounded-none transition-all">
              <span className="sm:border-b border-black sm:pb-1 group-hover:border-stone-400 transition-colors">
                View Portfolio
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/translations" className="group flex items-center gap-4 text-base md:text-lg text-stone-500 hover:text-stone-800 transition-colors px-2">
              <span className="pb-1">Translation Services</span>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Aesthetic Image Split */}
      <section className="w-full flex flex-col md:grid md:grid-cols-2">
        <div className="relative h-[50vh] md:h-[80vh] bg-stone-200 overflow-hidden order-1 md:order-none">
           <div 
             className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
             style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1547970810-dc1eac37d174?q=80&w=2533&auto=format&fit=crop")' }}
           />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-24 bg-stone-900 text-stone-100 order-2 md:order-none py-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl mb-6 md:mb-8 leading-tight font-serif">
              Two worlds, <br/>one perspective.
            </h2>
            <p className="text-stone-400 font-light text-base md:text-lg leading-relaxed max-w-md mb-8">
              My work exists at the intersection of the rugged plains of South Africa and the refined history of Italy. Whether through the lens of a camera or the nuance of language, I bridge the gap between distinct cultures.
            </p>
            <Link href="/about" className="text-white border border-stone-700 px-6 py-3 md:px-8 md:py-4 rounded-full w-fit hover:bg-white hover:text-black transition-all duration-300 text-sm md:text-base uppercase tracking-widest">
              Read My Story
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Services Minimal */}
      <section className="py-16 md:py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <FadeIn>
            <div className="border-l-2 border-stone-200 pl-6 md:border-none md:pl-0">
              <span className="block text-xs font-bold uppercase tracking-widest mb-3 text-stone-400">01</span>
              <h3 className="text-3xl md:text-4xl mb-4 md:mb-6">Photography</h3>
              <p className="text-stone-600 mb-6 md:mb-8 font-light leading-relaxed text-sm md:text-base">
                Reportage, weddings, and landscapes. My approach is documentary—unobtrusive, authentic, and focused on the raw emotion of the moment.
              </p>
              <Link href="/photography" className="text-xs md:text-sm uppercase tracking-widest border-b border-stone-300 pb-1 hover:border-black transition-colors">
                Explore Gallery
              </Link>
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="border-l-2 border-stone-200 pl-6 md:border-none md:pl-0">
              <span className="block text-xs font-bold uppercase tracking-widest mb-3 text-stone-400">02</span>
              <h3 className="text-3xl md:text-4xl mb-4 md:mb-6">Translations</h3>
              <p className="text-stone-600 mb-6 md:mb-8 font-light leading-relaxed text-sm md:text-base">
                Certified and sworn translations. Legal, medical, and creative texts rendered with precision from English to Italian and Afrikaans.
              </p>
              <Link href="/translations" className="text-xs md:text-sm uppercase tracking-widest border-b border-stone-300 pb-1 hover:border-black transition-colors">
                View Plans
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
EOF

# 3. Update Photography (Adjust padding)
cat << 'EOF' > app/photography/page.tsx
import { photographyCategories } from '@/lib/data';
import FadeIn from '@/components/ui/FadeIn';

export default function PhotographyPage() {
  return (
    <div className="min-h-screen pb-24">
      <div className="pt-28 md:pt-32 pb-12 md:pb-16 px-6 md:px-12 max-w-screen-2xl mx-auto text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-7xl mb-4 md:mb-6">Portfolio</h1>
          <p className="text-base md:text-lg text-stone-500 font-light max-w-2xl mx-auto leading-relaxed">
            A visual diary of places, faces, and moments suspended in time.
          </p>
        </FadeIn>
      </div>

      <div className="space-y-20 md:space-y-32 px-4 md:px-12 max-w-screen-2xl mx-auto">
        {photographyCategories.map((category) => (
          <section key={category.id}>
            <FadeIn>
              <div className="flex flex-col md:flex-row items-baseline gap-2 md:gap-4 mb-8 md:mb-12 border-b border-stone-200 pb-4">
                <h2 className="text-3xl md:text-4xl italic text-stone-800">{category.title}</h2>
                <span className="text-stone-400 text-xs md:text-sm tracking-wide">— {category.description}</span>
              </div>
            </FadeIn>
            
            {/* Masonry Layout */}
            <div className="masonry-grid">
              {Array.from({ length: category.count }).map((_, index) => (
                <FadeIn key={index} className="break-inside-avoid mb-4 md:mb-6">
                  <div className="relative group overflow-hidden bg-stone-200">
                    <img
                      src={`${category.folder}/${index + 1}.jpg`}
                      alt={`${category.title} photograph ${index + 1}`}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
EOF

# 4. Update Translations (Mobile-friendly pricing cards)
cat << 'EOF' > app/translations/page.tsx
import { translationPlans, siteConfig } from '@/lib/data';
import FadeIn from '@/components/ui/FadeIn';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function TranslationsPage() {
  return (
    <div className="min-h-screen pb-24 bg-stone-50">
      <div className="pt-28 md:pt-32 pb-12 md:pb-16 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <FadeIn>
          <h1 className="text-4xl md:text-7xl mb-6 md:mb-8">Official Translations</h1>
          <div className="grid md:grid-cols-3 gap-12">
            <p className="text-base md:text-lg text-stone-600 font-light leading-relaxed col-span-2">
              Whether you need sworn translations for citizenship, legal contracts for business, or creative localisation for your brand, I ensure every word carries its intended weight.
            </p>
          </div>
        </FadeIn>
      </div>

      <div className="px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {translationPlans.map((plan, i) => (
            <FadeIn key={plan.title} className="h-full">
              <div 
                className={`h-full flex flex-col p-6 md:p-10 transition-all duration-300 rounded-none md:rounded-sm ${
                  plan.recommended 
                    ? 'bg-stone-900 text-stone-50 shadow-xl scale-100 md:scale-[1.02] border-none' 
                    : 'bg-white text-stone-900 border border-stone-200'
                }`}
              >
                <div className="mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-serif italic mb-2">{plan.title}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl md:text-4xl font-light">{plan.price}</span>
                    <span className={`text-xs md:text-sm ${plan.recommended ? 'text-stone-400' : 'text-stone-500'}`}>
                      / {plan.unit}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 md:mb-12 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm tracking-wide leading-relaxed">
                      <CheckCircle2 className={`w-5 h-5 mr-3 shrink-0 ${plan.recommended ? 'text-stone-400' : 'text-stone-300'}`} />
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={`mailto:${siteConfig.email}?subject=Quote: ${plan.title}`}
                  className={`group w-full flex items-center justify-between py-4 px-6 border transition-all ${
                     plan.recommended
                       ? 'border-stone-700 bg-stone-800 hover:bg-stone-700 text-white'
                       : 'border-stone-200 hover:bg-stone-50 text-stone-900'
                  }`}
                >
                  <span className="uppercase tracking-widest text-xs font-bold">Request Quote</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
EOF

# 5. Update Footer (Stack columns on mobile)
cat << 'EOF' > components/Footer.tsx
import { siteConfig } from '@/lib/data';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-start">
        
        <div className="mb-12 md:mb-0 w-full md:w-auto">
          <h2 className="text-stone-100 text-4xl md:text-6xl font-serif mb-4 md:mb-6">Wilfred.</h2>
          <p className="max-w-xs font-light leading-relaxed text-sm md:text-base">
            Bridging worlds through lens and language. Based in Italy, available globally.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 md:gap-24 w-full md:w-auto">
          <div>
            <h4 className="text-stone-100 uppercase tracking-widest text-xs font-bold mb-4 md:mb-6">Sitemap</h4>
            <ul className="space-y-3 md:space-y-4 font-light text-sm md:text-base">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/photography" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/translations" className="hover:text-white transition-colors">Translations</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-stone-100 uppercase tracking-widest text-xs font-bold mb-4 md:mb-6">Connect</h4>
            <ul className="space-y-3 md:space-y-4 font-light text-sm md:text-base">
              <li><a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">Email</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-screen-2xl mx-auto mt-16 md:mt-24 pt-8 border-t border-stone-800 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-start md:items-center text-xs uppercase tracking-widest opacity-50">
        <p>&copy; {new Date().getFullYear()} Wilfred</p>
        <p>South Africa &bull; Italy</p>
      </div>
    </footer>
  );
}
EOF

echo "✅ Mobile view optimized."
echo "   Please restart your server: npm run dev"