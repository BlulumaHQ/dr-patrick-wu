import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Clock } from 'lucide-react';
import friendlyLogo from '@/assets/friendly/logo.svg';
import friendlyHero from '@/assets/friendly/about-clinic.jpg';
import lmLogo from '@/assets/lm/logo.svg';
import lmHero from '@/assets/lm/office-welcome.jpg';

const OurClinics = () => {
  const { t } = useLanguage();

  const clinics = [
    {
      name: 'Friendly Dental Centre',
      logo: friendlyLogo,
      image: friendlyHero,
      descKey: 'clinics.friendly.desc',
      address: '120 - 5508 Hollybridge Way, Richmond, BC',
      phone: '604-273-8315',
      phoneHref: 'tel:6042738315',
      hours: {
        monFri: '9:00 AM – 5:00 PM',
        sat: '9:00 AM – 5:00 PM',
        sun: t('hours.closed'),
      },
      ctaKey: 'clinics.visitFriendly',
      ctaHref: 'https://friendly-dental-centre-preview.lovable.app/',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.123!2d-123.1375!3d49.1895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDExJzIyLjIiTiAxMjPCsDA4JzE1LjAiVw!5e0!3m2!1sen!2sca!4v1!5m2!1sen!2sca&q=120-5508+Hollybridge+Way+Richmond+BC',
    },
    {
      name: 'Little Mountain Dental Centre',
      logo: lmLogo,
      image: lmHero,
      descKey: 'clinics.lm.desc',
      address: '620 E. Broadway, Vancouver, BC V5T 2A6',
      phone: '604-879-5612',
      phoneHref: 'tel:6048795612',
      hours: {
        monFri: '9:00 AM – 5:00 PM',
        sat: '9:00 AM – 2:00 PM',
        sun: t('hours.closed'),
      },
      ctaKey: 'clinics.visitLM',
      ctaHref: 'https://littlemountain-03-bluluma-preview.lovable.app/',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.123!2d-123.0885!3d49.2633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f62dcb8675%3A0xedd3f62fe73ec0ea!2sLittle+Mountain+Dental+Centre!5e0!3m2!1sen!2sca!4v1!5m2!1sen!2sca',
    },
  ];

  return (
    <section id="clinics" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-section">{t('clinics.title')}</h2>
          <div className="divider-accent" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {clinics.map((clinic) => (
            <div key={clinic.name} className="clinic-card p-0 overflow-hidden">
              <div className="relative">
                <img
                  src={clinic.image}
                  alt={clinic.name}
                  className="w-full h-56 object-cover"
                />
              </div>

              <div className="p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <img src={clinic.logo} alt={clinic.name} className="h-8" />
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(clinic.descKey)}
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                    <span>{clinic.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone size={16} className="shrink-0 text-accent" />
                    <a href={clinic.phoneHref} className="text-foreground font-medium hover:text-accent transition-colors">
                      {clinic.phone}
                    </a>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Clock size={14} className="text-accent" />
                    <span>{t('hours.title')}</span>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1 pl-6">
                    <div className="flex justify-between">
                      <span>{t('hours.monFri')}</span>
                      <span>{clinic.hours.monFri}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('hours.sat')}</span>
                      <span>{clinic.hours.sat}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('hours.sun')}</span>
                      <span>{clinic.hours.sun}</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden border border-border">
                  <iframe
                    src={clinic.mapSrc}
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${clinic.name} Map`}
                  />
                </div>

                <a
                  href={clinic.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-clinic w-full text-center"
                >
                  {t(clinic.ctaKey)}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClinics;
