import { useLanguage } from '@/contexts/LanguageContext';
import heroBg from '@/assets/friendly/hero-bg.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Dental clinic environment" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>
      <div className="section-container w-full relative z-10">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-tight">
              Dr. Patrick Wu
            </h1>
            <p className="text-lg md:text-xl text-accent font-medium tracking-widest uppercase">
              {t('hero.tagline')}
            </p>
          </div>
          <div className="divider-accent !mx-0" />
          <p className="heading-sub max-w-lg">
            {t('hero.subtitle')}
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-lg">
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
