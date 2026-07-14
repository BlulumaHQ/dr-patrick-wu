import { useLanguage } from '@/contexts/LanguageContext';
import implantIcon from '@/assets/icons/implant.svg';
import orthodonticIcon from '@/assets/icons/orthodontic.svg';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AreasOfFocus = () => {
  const { t } = useLanguage();

  const specialties = [
    {
      titleKey: 'services.implants',
      descKey: 'services.implants.desc',
      icon: implantIcon,
      href: '/dental-implants',
      ariaKey: 'di.home.readMoreAria',
    },
    {
      titleKey: 'services.orthodontics',
      descKey: 'services.orthodontics.desc',
      icon: orthodonticIcon,
      href: null as string | null,
      ariaKey: null as string | null,
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-section">{t('services.title')}</h2>
          <div className="divider-accent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {specialties.map(({ titleKey, descKey, icon, href, ariaKey }) => (
            <article
              key={titleKey}
              className="bg-background rounded-lg p-8 md:p-10 lg:p-12 shadow-sm border border-border/50 flex flex-col"
            >
              <div className="w-14 h-14 mb-6">
                <img src={icon} alt="" className="w-full h-full" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                {t(titleKey)}
              </h3>
              <div className="w-12 h-px bg-primary mb-6" />
              <p className="text-base md:text-[17px] text-muted-foreground leading-[1.7]">
                {t(descKey)}
              </p>
              {href && (
                <div className="mt-6">
                  <Link
                    to={href}
                    aria-label={ariaKey ? t(ariaKey) : undefined}
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:opacity-80 transition-opacity"
                  >
                    {t('di.home.readMore')}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasOfFocus;
