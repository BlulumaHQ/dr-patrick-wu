import { useLanguage } from '@/contexts/LanguageContext';

const GallerySection = () => {
  const { t } = useLanguage();

  const images = [
    { src: 'https://www.drpatrickwu.com/wp-content/uploads/2023/04/Asset-1.png', alt: 'Clinic interior 1' },
    { src: 'https://www.drpatrickwu.com/wp-content/uploads/2023/11/asset-211.png', alt: 'Clinic interior 2' },
    { src: 'https://www.drpatrickwu.com/wp-content/uploads/2023/11/asset-311.png', alt: 'Clinic interior 3' },
    { src: 'https://www.drpatrickwu.com/wp-content/uploads/2023/04/Asset-2.png', alt: 'Clinic interior 4' },
    { src: 'https://www.drpatrickwu.com/wp-content/uploads/2023/04/Asset-3.png', alt: 'Clinic interior 5' },
    { src: 'https://www.drpatrickwu.com/wp-content/uploads/2023/04/choose-right-img-1024x679.png', alt: 'Dr. Patrick Wu with patient' },
  ];

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-section">{t('gallery.title')}</h2>
          <div className="divider-accent" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div key={i} className="rounded-lg overflow-hidden border border-border">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
