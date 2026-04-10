import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import fg1 from '@/assets/friendly/gallery-exterior.webp';
import fg2 from '@/assets/friendly/gallery-library.webp';
import fg3 from '@/assets/friendly/gallery-reading.webp';
import fg4 from '@/assets/friendly/gallery-treatment.webp';
import fg5 from '@/assets/friendly/gallery-patient.webp';
import fg6 from '@/assets/friendly/gallery-reception.webp';

import lg1 from '@/assets/lm/gallery-exterior.webp';
import lg2 from '@/assets/lm/gallery-library.webp';
import lg3 from '@/assets/lm/gallery-shelves.webp';
import lg4 from '@/assets/lm/gallery-treatment.webp';
import lg5 from '@/assets/lm/gallery-drwu.webp';
import lg6 from '@/assets/lm/gallery-lounge.webp';

const InsideOurClinics = () => {
  const { t } = useLanguage();
  const [lightbox, setLightbox] = useState<{ images: { src: string; alt: string }[]; index: number } | null>(null);

  const friendlyImages = [
    { src: fg1, alt: 'Friendly Dental Centre exterior' },
    { src: fg2, alt: 'Friendly Dental Centre library' },
    { src: fg3, alt: 'Friendly Dental Centre reading area' },
    { src: fg4, alt: 'Friendly Dental Centre treatment room' },
    { src: fg5, alt: 'Friendly Dental Centre patient care' },
    { src: fg6, alt: 'Friendly Dental Centre reception' },
  ];

  const lmImages = [
    { src: lg1, alt: 'Little Mountain Dental Centre exterior' },
    { src: lg2, alt: 'Little Mountain Dental Centre library' },
    { src: lg3, alt: 'Little Mountain Dental Centre shelves' },
    { src: lg4, alt: 'Little Mountain Dental Centre treatment room' },
    { src: lg5, alt: 'Little Mountain Dental Centre Dr. Wu with patient' },
    { src: lg6, alt: 'Little Mountain Dental Centre lounge' },
  ];

  const openLightbox = (images: { src: string; alt: string }[], index: number) => {
    setLightbox({ images, index });
  };

  const navigate = (dir: -1 | 1) => {
    if (!lightbox) return;
    const newIndex = (lightbox.index + dir + lightbox.images.length) % lightbox.images.length;
    setLightbox({ ...lightbox, index: newIndex });
  };

  return (
    <>
      <section id="gallery" className="section-padding bg-secondary">
        <div className="section-container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="heading-section">{t('gallery.title')}</h2>
            <div className="divider-accent" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground text-center mb-6">Friendly Dental Centre</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {friendlyImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => openLightbox(friendlyImages, i)}
                    className="rounded-lg overflow-hidden border border-border cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-28 md:h-36 object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground text-center mb-6">Little Mountain Dental Centre</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {lmImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => openLightbox(lmImages, i)}
                    className="rounded-lg overflow-hidden border border-border cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-28 md:h-36 object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
          >
            <ChevronLeft size={40} />
          </button>

          <img
            src={lightbox.images[lightbox.index].src}
            alt={lightbox.images[lightbox.index].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 md:right-8 text-white/60 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
          >
            <ChevronRight size={40} />
          </button>

          <div className="absolute bottom-6 text-white/50 text-sm">
            {lightbox.index + 1} / {lightbox.images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default InsideOurClinics;
