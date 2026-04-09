import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center bg-background pt-20">
      <div className="section-container w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-8">
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
            <a
              href="#locations"
              className="btn-clinic inline-block"
            >
              {t('locations.title')}
            </a>
          </div>
          <div className="relative">
            <img
              src="https://www.drpatrickwu.com/wp-content/uploads/2023/04/choose-right-img-1024x679.png"
              alt="Dr. Patrick Wu with patient"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
