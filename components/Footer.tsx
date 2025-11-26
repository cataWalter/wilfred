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
