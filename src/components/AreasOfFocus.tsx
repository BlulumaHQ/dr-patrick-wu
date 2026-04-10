import { useLanguage } from '@/contexts/LanguageContext';

const AreasOfFocus = () => {
  const { t } = useLanguage();

  const services = [
    { titleKey: 'services.implants', descKey: 'services.implants.desc', icon: '🦷' },
    { titleKey: 'services.orthodontics', descKey: 'services.orthodontics.desc', icon: '😁' },
    { titleKey: 'services.pediatric', descKey: 'services.pediatric.desc', icon: '👶' },
    { titleKey: 'services.restorative', descKey: 'services.restorative.desc', icon: '🔧' },
    { titleKey: 'services.preventive', descKey: 'services.preventive.desc', icon: '🛡️' },
    { titleKey: 'services.cosmetic', descKey: 'services.cosmetic.desc', icon: '✨' },
  ];

  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-section">{t('services.title')}</h2>
          <div className="divider-accent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ titleKey, descKey, icon }) => (
            <div key={titleKey} className="clinic-card text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto text-2xl">
                {icon}
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
