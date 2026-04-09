import { useLanguage } from '@/contexts/LanguageContext';

const SupportText = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl text-center">
        <p className="text-muted-foreground leading-relaxed text-lg">
          {t('support.text')}
        </p>
      </div>
    </section>
  );
};

export default SupportText;
