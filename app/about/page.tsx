import FadeIn from '@/components/ui/FadeIn';
import { siteConfig } from '@/lib/data';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50 pb-24">
      
      {/* Hero Header */}
      <div className="pt-32 pb-16 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <FadeIn>
          <h1 className="text-6xl md:text-8xl text-stone-900 mb-8 leading-[0.9]">
            The <span className="italic font-serif text-stone-500">Observer</span>.
          </h1>
        </FadeIn>
      </div>

      {/* Narrative Section */}
      <div className="px-6 md:px-12 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Left Col: Image */}
        <div className="lg:col-span-5">
          <FadeIn delay={0.2}>
            <div className="relative aspect-[3/4] bg-stone-200 overflow-hidden">
              {/* Portrait Placeholder */}
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop")' }}
              ></div>
            </div>
            <div className="mt-4 flex justify-between text-xs font-bold uppercase tracking-widest text-stone-400">
              <span>Based in {siteConfig.location}</span>
              <span>Est. 2018</span>
            </div>
          </FadeIn>
        </div>

        {/* Right Col: Text */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
          <FadeIn delay={0.4}>
            <h3 className="text-2xl md:text-3xl font-serif italic text-stone-800">
              "I translate not just words, but the intent behind them. I capture not just faces, but the stories etched into them."
            </h3>
          </FadeIn>
          
          <FadeIn delay={0.5}>
            <div className="prose prose-stone prose-lg text-stone-600 font-light leading-relaxed">
              <p>
                My journey began under the vast, open skies of South Africa. The rhythm of the land there is slow, deliberate, and deeply connected to the earth. It taught me patience—the essential virtue of both photography and translation.
              </p>
              <p>
                Moving to Italy changed the texture of my life. I traded the savannah for cobblestones, and silence for the melodic chaos of Italian piazzas. This duality defines my work.
              </p>
              <p>
                As a <strong>Translator</strong>, I navigate the nuances between Germanic precision (English/Afrikaans) and Romance expression (Italian). I specialize in sworn translations because I understand that accuracy affects lives.
              </p>
              <p>
                As a <strong>Photographer</strong>, I look for the universal human experience. Whether it is a wedding in Tuscany or a street scene in Cape Town, I seek the moment where the guard drops and the soul is visible.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="pt-8 border-t border-stone-200 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Languages</h4>
                <p className="text-stone-600 font-serif italic">English (Native), Italian (Fluent), Afrikaans (Native)</p>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Focus</h4>
                <p className="text-stone-600 font-serif italic">Documentary, Analog, Legal</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
