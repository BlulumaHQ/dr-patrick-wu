import { useLanguage } from '@/contexts/LanguageContext';

const ToothIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M12 2C9.5 2 7 3.5 6 6c-1.5 3.5-.5 6 .5 9 .7 2 1.5 5 2.5 5s1.5-2 3-2 2 2 3 2 1.8-3 2.5-5c1-3 2-5.5.5-9-1-2.5-3.5-4-6-4z" />
  </svg>
);

const ImplantIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M12 2C10 2 8.5 3.5 8.5 5.5S10 9 12 9s3.5-1.5 3.5-3.5S14 2 12 2z" />
    <line x1="10" y1="9" x2="14" y2="9" />
    <path d="M10.5 11h3M11 13h2M11.5 15h1M11 17h2M10.5 19h3" />
  </svg>
);

const BracesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <rect x="3" y="10" width="4" height="4" rx="0.5" />
    <rect x="10" y="10" width="4" height="4" rx="0.5" />
    <rect x="17" y="10" width="4" height="4" rx="0.5" />
    <line x1="7" y1="12" x2="10" y2="12" />
    <line x1="14" y1="12" x2="17" y2="12" />
  </svg>
);

const ChildToothIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M12 3C10 3 8.5 4.5 7.5 6.5c-1 2.5-.5 4.5.5 7 .5 1.5 1 3.5 2 3.5s1.2-1.5 2-1.5 1.2 1.5 2 1.5 1.5-2 2-3.5c1-2.5 1.5-4.5.5-7C15.5 4.5 14 3 12 3z" />
    <circle cx="10.5" cy="7" r="0.5" fill="currentColor" />
    <circle cx="13.5" cy="7" r="0.5" fill="currentColor" />
    <path d="M10.5 9.5c.5.5 2.5.5 3 0" />
  </svg>
);

const ShieldToothIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M12 2l7 3v5c0 5-3 9-7 11-4-2-7-6-7-11V5l7-3z" />
    <path d="M12 8c-1 0-1.8.8-1.5 2 .2.8.5 1.5.7 2.5.2.7.5 1.5.8 1.5s.6-.8.8-1.5c.2-1 .5-1.7.7-2.5.3-1.2-.5-2-1.5-2z" />
  </svg>
);

const SparkleToothIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M13 4C11 4 9.5 5.5 9 7.5c-1 3 0 5 .8 7.5.4 1.3 1 3.5 1.7 3.5s1-1.5 1.5-1.5 1 1.5 1.5 1.5.9-2.2 1.3-3.5c.8-2.5 1.8-4.5.8-7.5-.5-2-2-3.5-3.6-3.5z" />
    <path d="M5 3l.5 1.5L7 5l-1.5.5L5 7l-.5-1.5L3 5l1.5-.5z" />
    <path d="M19 7l.5 1.5L21 9l-1.5.5L19 11l-.5-1.5L17 9l1.5-.5z" />
  </svg>
);

const AreasOfFocus = () => {
  const { t } = useLanguage();

  const services = [
    { titleKey: 'services.implants', descKey: 'services.implants.desc', Icon: ImplantIcon },
    { titleKey: 'services.orthodontics', descKey: 'services.orthodontics.desc', Icon: BracesIcon },
    { titleKey: 'services.pediatric', descKey: 'services.pediatric.desc', Icon: ChildToothIcon },
    { titleKey: 'services.restorative', descKey: 'services.restorative.desc', Icon: ToothIcon },
    { titleKey: 'services.preventive', descKey: 'services.preventive.desc', Icon: ShieldToothIcon },
    { titleKey: 'services.cosmetic', descKey: 'services.cosmetic.desc', Icon: SparkleToothIcon },
  ];

  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-section">{t('services.title')}</h2>
          <div className="divider-accent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ titleKey, descKey, Icon }) => (
            <div key={titleKey} className="clinic-card text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto text-accent">
                <Icon />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{t(titleKey)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasOfFocus;
