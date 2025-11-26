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
