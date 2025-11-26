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
