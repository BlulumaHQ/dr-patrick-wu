import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap } from 'lucide-react';
import drWuPhoto from '@/assets/lm/dr-wu.png';

const AboutDrWu = () => {
  const { t } = useLanguage();

  const credentials = [
    t('about.cred1'),
    t('about.cred2'),
    t('about.cred3'),
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-section">{t('about.title')}</h2>
          <div className="divider-accent" />
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2 flex justify-center px-6 md:px-4">
            <img
              src={drWuPhoto}
              alt="Dr. Patrick Wu"
              className="rounded-lg shadow-lg w-full max-w-[280px] md:max-w-[300px] object-cover aspect-[3/4]"
            />
          </div>

          <div className="md:col-span-3 space-y-6 px-2 md:px-0">
            <div>
              <h3 className="text-2xl font-semibold text-foreground">Dr. Patrick Wu</h3>
              <p className="text-accent font-medium mt-1">{t('about.degree')}</p>
            </div>

            <ul className="space-y-2">
              {credentials.map((cred, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <GraduationCap size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>{cred}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground leading-relaxed">
              {t('about.bio')}
            </p>

            <p className="text-muted-foreground leading-relaxed">
              {t('about.focus')}
            </p>

            <p className="text-foreground font-medium leading-relaxed border-l-2 border-accent pl-4">
              {t('about.owner')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDrWu;
