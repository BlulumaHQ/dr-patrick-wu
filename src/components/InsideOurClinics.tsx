import { useLanguage } from '@/contexts/LanguageContext';

import fg1 from '@/assets/friendly/gallery-1.png';
import fg2 from '@/assets/friendly/gallery-2.png';
import fg3 from '@/assets/friendly/gallery-3.png';
import fg4 from '@/assets/friendly/gallery-4.jpg';

import lg1 from '@/assets/lm/gallery-1.webp';
import lg2 from '@/assets/lm/gallery-2.webp';
import lg3 from '@/assets/lm/gallery-3.webp';
import lg4 from '@/assets/lm/gallery-4.webp';

const InsideOurClinics = () => {
  const { t } = useLanguage();

  const friendlyImages = [
    { src: fg1, alt: 'Friendly Dental Centre interior 1' },
    { src: fg2, alt: 'Friendly Dental Centre interior 2' },
    { src: fg3, alt: 'Friendly Dental Centre interior 3' },
    { src: fg4, alt: 'Friendly Dental Centre waiting area' },
  ];

  const lmImages = [
    { src: lg1, alt: 'Little Mountain Dental Centre waiting area' },
    { src: lg2, alt: 'Little Mountain Dental Centre treatment room' },
    { src: lg3, alt: 'Little Mountain Dental Centre library' },
    { src: lg4, alt: 'Little Mountain Dental Centre pediatric area' },
  ];

  return (
    <section id="gallery" className="section-padding bg-secondary">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-section">{t('gallery.title')}</h2>
          <div className="divider-accent" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground text-center mb-6">Friendly Dental Centre</h3>
            <div className="grid grid-cols-2 gap-3">
              {friendlyImages.map((img, i) => (
                <div key={i} className="rounded-lg overflow-hidden border border-border">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-36 md:h-44 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground text-center mb-6">Little Mountain Dental Centre</h3>
            <div className="grid grid-cols-2 gap-3">
              {lmImages.map((img, i) => (
                <div key={i} className="rounded-lg overflow-hidden border border-border">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-36 md:h-44 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsideOurClinics;
