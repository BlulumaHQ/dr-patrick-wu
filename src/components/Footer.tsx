import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-4">
            <img
              src="https://www.drpatrickwu.com/wp-content/uploads/2023/05/friendly-dental.svg"
              alt="Friendly Dental Centre"
              className="h-8 brightness-0 invert"
            />
            <div className="flex items-start gap-3 text-sm text-primary-foreground/70">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>120 - 5508 Hollybridge Way, Richmond, BC</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone size={16} className="shrink-0" />
              <a href="tel:6042738315" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                604-273-8315
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <img
              src="https://www.drpatrickwu.com/wp-content/uploads/2023/05/little-1.svg"
              alt="Little Mountain Dental Centre"
              className="h-8 brightness-0 invert"
            />
            <div className="flex items-start gap-3 text-sm text-primary-foreground/70">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>620 E. Broadway, Vancouver, BC V5T 2A6</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone size={16} className="shrink-0" />
              <a href="tel:6048795612" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                604-879-5612
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/50">
          <p>
            {t('footer.rights')} | {t('footer.design')}{' '}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Bluluma
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
