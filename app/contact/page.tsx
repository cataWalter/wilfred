import FadeIn from '@/components/ui/FadeIn';
import { siteConfig } from '@/lib/data';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 flex flex-col justify-center relative overflow-hidden">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #44403c 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-screen-xl w-full mx-auto px-6 md:px-12 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-32">
          
          {/* Left: Call to Action */}
          <div>
            <FadeIn>
              <h1 className="text-6xl md:text-8xl font-serif mb-8">
                Let's <br/>Create.
              </h1>
              <p className="text-xl text-stone-400 font-light max-w-md leading-relaxed mb-12">
                Whether you need a sworn translation for your citizenship application or a photographer for your wedding day, I am ready to help.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <a href={`mailto:${siteConfig.email}`} className="group block">
                  <div className="flex items-center text-stone-500 group-hover:text-stone-300 transition-colors mb-2">
                    <Mail className="w-5 h-5 mr-3" />
                    <span className="uppercase tracking-widest text-xs font-bold">Email</span>
                  </div>
                  <span className="text-2xl md:text-4xl font-serif italic border-b border-stone-700 pb-1 group-hover:border-stone-300 transition-colors">
                    {siteConfig.email}
                  </span>
                </a>

                <div className="block">
                  <div className="flex items-center text-stone-500 mb-2">
                    <Phone className="w-5 h-5 mr-3" />
                    <span className="uppercase tracking-widest text-xs font-bold">Phone / WhatsApp</span>
                  </div>
                  <span className="text-2xl font-serif italic">
                    {siteConfig.phone}
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Interactive / Form Area */}
          <div className="flex flex-col justify-end">
             <FadeIn delay={0.4}>
               <div className="bg-stone-800/50 backdrop-blur-sm p-8 md:p-12 border border-stone-700">
                 <h3 className="text-xl font-bold mb-6">Availability</h3>
                 <p className="text-stone-400 font-light mb-8">
                   Currently accepting bookings for the 2024/2025 wedding season in Italy. Translation services available year-round with a standard 48h turnaround.
                 </p>
                 <a 
                   href={`mailto:${siteConfig.email}`} 
                   className="inline-flex items-center justify-center w-full bg-stone-100 text-stone-900 py-4 px-8 font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors"
                 >
                   Start a Project <ArrowUpRight className="ml-2 w-4 h-4" />
                 </a>
               </div>
             </FadeIn>
          </div>

        </div>
      </div>
    </div>
  );
}
