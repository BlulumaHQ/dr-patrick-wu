import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone } from 'lucide-react';
import friendlyLogo from '@/assets/friendly/footer-logo.svg';
import lmLogo from '@/assets/lm/logo-white.svg';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-4 text-center">
            <img src={friendlyLogo} alt="Friendly Dental Centre" className="h-8 brightness-0 invert mx-auto" />
            <div className="flex items-start justify-center gap-3 text-sm text-primary-foreground/70">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>120 - 5508 Hollybridge Way, Richmond, BC</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-sm">
              <Phone size={16} className="shrink-0" />
              <a href="tel:6042738315" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                604-273-8315
              </a>
            </div>
          </div>

          <div className="space-y-4 text-center">
            <img src={lmLogo} alt="Little Mountain Dental Centre" className="h-8 brightness-0 invert mx-auto" />
            <div className="flex items-start justify-center gap-3 text-sm text-primary-foreground/70">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>620 E. Broadway, Vancouver, BC V5T 2A6</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-sm">
              <Phone size={16} className="shrink-0" />
              <a href="tel:6048795612" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                604-879-5612
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center space-y-1">
          <p className="text-sm text-primary-foreground/50">
            © 2026 Dr. Patrick Wu. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/30">
            Web Design by{' '}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors"
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
