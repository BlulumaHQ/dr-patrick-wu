import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Heart, Cpu, Smile } from 'lucide-react';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const highlights = [
    { icon: Award, key: 'why.exp' },
    { icon: Heart, key: 'why.personal' },
    { icon: Cpu, key: 'why.tech' },
    { icon: Smile, key: 'why.comfort' },
  ];

  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-section">{t('why.title')}</h2>
          <div className="divider-accent" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {highlights.map(({ icon: Icon, key }) => (
            <div key={key} className="text-center space-y-3 p-6">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <Icon size={24} className="text-accent" />
              </div>
              <p className="text-sm font-medium text-foreground leading-snug">{t(key)}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground leading-relaxed text-center">
            {t('why.paragraph')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
