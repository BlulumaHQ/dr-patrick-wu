import { useLanguage } from '@/contexts/LanguageContext';
import heroBg from '@/assets/friendly/about-clinic.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Dr. Wu with patient" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,12%)]/95 via-[hsl(220,20%,12%)]/75 to-[hsl(220,20%,12%)]/40" />
      </div>
      <div className="section-container w-full relative z-10">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight">
              Dr. Patrick Wu
            </h1>
            <p className="text-lg md:text-xl text-accent font-medium tracking-widest uppercase">
              {t('hero.tagline')}
            </p>
          </div>
          <div className="w-12 h-0.5 bg-accent" />
          <p className="text-lg md:text-xl text-white/80 font-light max-w-lg">
            {t('hero.subtitle')}
          </p>
          <p className="text-white/60 leading-relaxed max-w-lg">
            {t('hero.description')}
          </p>
          <a href="#clinics" className="btn-clinic inline-block">
            {t('hero.cta')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
