import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import drwuLogo from '@/assets/drwu-logo.svg';

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { key: 'nav.about', href: '#about' },
    { key: 'nav.clinics', href: '#clinics' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.gallery', href: '#gallery' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-3">
          <img src={drwuLogo} alt="Dr. Patrick Wu" className="h-7 md:h-11" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(item.key)}
            </a>
          ))}
          <div className="flex items-center gap-1 ml-4 border border-border rounded-full px-1 py-0.5 text-sm">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-full transition-colors ${lang === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('zh')}
              className={`px-3 py-1 rounded-full transition-colors ${lang === 'zh' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              中文
            </button>
          </div>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <div className="flex items-center gap-1 border border-border rounded-full px-1 py-0.5 text-xs">
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-0.5 rounded-full transition-colors ${lang === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('zh')}
              className={`px-2 py-0.5 rounded-full transition-colors ${lang === 'zh' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}
            >
              中文
            </button>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="section-container py-4 flex flex-col gap-3">
            {navItems.map(item => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
