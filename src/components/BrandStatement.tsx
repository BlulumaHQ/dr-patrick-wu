import { useLanguage } from '@/contexts/LanguageContext';

const BrandStatement = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-primary">
      <div className="section-container text-center space-y-6">
        <p className="text-2xl md:text-4xl font-semibold text-primary-foreground tracking-widest">
          {t('brand.quote')}
        </p>
        <div className="w-12 h-0.5 bg-primary-foreground/30 mx-auto" />
        <p className="text-primary-foreground/70 text-lg">— Dr. Patrick Wu</p>
      </div>
    </section>
  );
};

export default BrandStatement;
