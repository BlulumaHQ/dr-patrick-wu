import { useLanguage } from '@/contexts/LanguageContext';

const MapsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-secondary">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-section">{t('maps.title')}</h2>
          <div className="divider-accent" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground text-center">Friendly Dental Centre</h3>
            <div className="rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.123!2d-123.1375!3d49.1895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDExJzIyLjIiTiAxMjPCsDA4JzE1LjAiVw!5e0!3m2!1sen!2sca!4v1!5m2!1sen!2sca&q=120-5508+Hollybridge+Way+Richmond+BC"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Friendly Dental Centre Map"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground text-center">Little Mountain Dental Centre</h3>
            <div className="rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.123!2d-123.0885!3d49.2633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f62dcb8675%3A0xedd3f62fe73ec0ea!2sLittle+Mountain+Dental+Centre!5e0!3m2!1sen!2sca!4v1!5m2!1sen!2sca"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Little Mountain Dental Centre Map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapsSection;
