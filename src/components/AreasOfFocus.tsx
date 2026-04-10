import { useLanguage } from '@/contexts/LanguageContext';
import implantIcon from '@/assets/icons/implant.svg';
import orthodonticIcon from '@/assets/icons/orthodontic.svg';
import pediatricIcon from '@/assets/icons/pediatric.svg';
import restorativeIcon from '@/assets/icons/restorative.svg';
import maintenanceIcon from '@/assets/icons/maintenance.svg';
import estheticIcon from '@/assets/icons/esthetic.svg';

const AreasOfFocus = () => {
  const { t } = useLanguage();

  const services = [
    { titleKey: 'services.implants', descKey: 'services.implants.desc', icon: implantIcon },
    { titleKey: 'services.orthodontics', descKey: 'services.orthodontics.desc', icon: orthodonticIcon },
    { titleKey: 'services.pediatric', descKey: 'services.pediatric.desc', icon: pediatricIcon },
    { titleKey: 'services.restorative', descKey: 'services.restorative.desc', icon: restorativeIcon },
    { titleKey: 'services.preventive', descKey: 'services.preventive.desc', icon: maintenanceIcon },
    { titleKey: 'services.cosmetic', descKey: 'services.cosmetic.desc', icon: estheticIcon },
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
              <div className="w-16 h-16 mx-auto">
                <img src={icon} alt="" className="w-full h-full" />
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
