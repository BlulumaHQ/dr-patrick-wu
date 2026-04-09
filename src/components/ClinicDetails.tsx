import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Clock } from 'lucide-react';

const ClinicDetails = () => {
  const { t } = useLanguage();

  const clinics = [
    {
      name: 'Friendly Dental Centre',
      logo: 'https://www.drpatrickwu.com/wp-content/uploads/2023/05/friendly-dental.svg',
      address: '120 - 5508 Hollybridge Way, Richmond, BC',
      phone: '604-273-8315',
      phoneTel: 'tel:6042738315',
      hours: { monFri: '9:00am – 5:30pm', sat: '9:00am – 5:30pm' },
      image: 'https://www.drpatrickwu.com/wp-content/uploads/2023/04/Asset-1.png',
    },
    {
      name: 'Little Mountain Dental Centre',
      logo: 'https://www.drpatrickwu.com/wp-content/uploads/2023/05/little-1.svg',
      address: '620 E. Broadway, Vancouver, BC V5T 2A6',
      phone: '604-879-5612',
      phoneTel: 'tel:6048795612',
      hours: { monFri: '9:00am – 5:30pm', sat: '8:30am – 5:00pm' },
      image: 'https://www.drpatrickwu.com/wp-content/uploads/2023/11/asset-211.png',
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-section">{t('details.title')}</h2>
          <div className="divider-accent" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {clinics.map((clinic) => (
            <div key={clinic.name} className="clinic-card">
              <div className="mb-6">
                <img src={clinic.logo} alt={`${clinic.name} logo`} className="h-10 mb-4" />
              </div>

              <div className="rounded-lg overflow-hidden mb-6">
                <img src={clinic.image} alt={`${clinic.name} interior`} className="w-full h-48 object-cover" />
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>{clinic.address}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone size={16} className="shrink-0 text-accent" />
                  <a href={clinic.phoneTel} className="text-foreground font-medium hover:text-accent transition-colors">
                    {clinic.phone}
                  </a>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Clock size={16} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium text-foreground mb-1">{t('hours.title')}</p>
                    <p>{t('hours.monFri')}: {clinic.hours.monFri}</p>
                    <p>{t('hours.sat')}: {clinic.hours.sat}</p>
                    <p>{t('hours.sun')}: {t('hours.closed')}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicDetails;
