import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Hero = () => {
  const t = useTranslations();
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Identity & Contact */}
          <div className="flex flex-col items-center text-center space-y-8">
            
            <div className="w-60 h-60 rounded-full border-2 border-neutral-700 overflow-hidden relative shadow-2xl shadow-neutral-900/50">
                <Image 
                  src="/me.jpg" 
                  alt="Abdelhafid Rahab" 
                  fill 
                  className="object-cover"
                  priority // Loads image immediately for performance
                />
            </div>

            <div>
              <h1 className="text-2xl md:text-4xl font-bold tracking-tighter text-white mb-4">
                {t('Hero.name')}
              </h1>
              <h2 className="text-l md:text-xl font-medium text-neutral-400">
                {t('Hero.role')}{" "}
                <span className="heading-gradient font-bold">{t('Hero.ai')}</span>
              </h2>
            </div>
          </div>

          {/* Right Column: Bio */}
          <div className="lg:border-s lg:border-neutral-800 lg:ps-12 py-4">
            <p className="text-center lg:text-start text-lg md:text-xl text-neutral-300 leading-relaxed">
              {t('About.intro')}
            </p>
          </div>

        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-neutral-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
};