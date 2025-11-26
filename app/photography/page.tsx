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
