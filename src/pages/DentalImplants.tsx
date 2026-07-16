import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import drWuPhoto from '@/assets/lm/dr-wu.png';
import friendlyLogo from '@/assets/friendly/logo.svg';
import lmLogo from '@/assets/lm/logo.svg';
import {
  Award,
  Activity,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  MapPin,
  Phone,
  ExternalLink,
  Layers,
  Scan,
  Cpu,
  ScanLine,
  Target,
} from 'lucide-react';

const PUBLIC_URL = 'https://dr-patrick-wu.lovable.app/dental-implants';

const LM = {
  name: 'Little Mountain Dental Centre',
  address: '620 E. Broadway, Vancouver, BC V5T 2A6',
  tel: '604-879-5612',
  telHref: 'tel:6048795612',
  website: 'https://littlemountaindental.ca/',
  booking: 'https://littlemountaindental.ca/',
};

const FD = {
  name: 'Friendly Dental Centre',
  address: '120 - 5508 Hollybridge Way, Richmond, BC',
  tel: '604-273-8315',
  telHref: 'tel:6042738315',
  website: 'https://friendlydental.ca/',
  booking: 'https://friendlydental.ca/',
};

interface FaqItem {
  qKey: string;
  aKeys: string[];
  srcKey?: string;
}

interface FaqCategory {
  titleKey: string;
  items: FaqItem[];
}

const FAQ_CATEGORIES: FaqCategory[] = [
  {
    titleKey: 'di.faq.cat1',
    items: [
      { qKey: 'di.faq.q1', aKeys: ['di.faq.a1.p1', 'di.faq.a1.p2', 'di.faq.a1.p3'], srcKey: 'di.faq.a1.src' },
      { qKey: 'di.faq.q2', aKeys: ['di.faq.a2.p1', 'di.faq.a2.p2', 'di.faq.a2.p3', 'di.faq.a2.p4', 'di.faq.a2.p5'] },
      { qKey: 'di.faq.q3', aKeys: ['di.faq.a3.p1', 'di.faq.a3.p2', 'di.faq.a3.p3'] },
      { qKey: 'di.faq.q4', aKeys: ['di.faq.a4.p1', 'di.faq.a4.p2', 'di.faq.a4.p3'] },
    ],
  },
  {
    titleKey: 'di.faq.cat2',
    items: [
      { qKey: 'di.faq.q5', aKeys: ['di.faq.a5.p1', 'di.faq.a5.p2', 'di.faq.a5.p3'] },
      { qKey: 'di.faq.q6', aKeys: ['di.faq.a6.p1', 'di.faq.a6.p2', 'di.faq.a6.p3'] },
      { qKey: 'di.faq.q7', aKeys: ['di.faq.a7.p1', 'di.faq.a7.p2', 'di.faq.a7.p3'] },
      { qKey: 'di.faq.q8', aKeys: ['di.faq.a8.p1', 'di.faq.a8.p2', 'di.faq.a8.p3'] },
      { qKey: 'di.faq.q9', aKeys: ['di.faq.a9.p1', 'di.faq.a9.p2', 'di.faq.a9.p3'] },
    ],
  },
  {
    titleKey: 'di.faq.cat3',
    items: [
      { qKey: 'di.faq.q10', aKeys: ['di.faq.a10.p1', 'di.faq.a10.p2', 'di.faq.a10.p3', 'di.faq.a10.p4'] },
      { qKey: 'di.faq.q11', aKeys: ['di.faq.a11.p1', 'di.faq.a11.p2', 'di.faq.a11.p3', 'di.faq.a11.p4'] },
      { qKey: 'di.faq.q12', aKeys: ['di.faq.a12.p1', 'di.faq.a12.p2', 'di.faq.a12.p3', 'di.faq.a12.p4'] },
      { qKey: 'di.faq.q13', aKeys: ['di.faq.a13.p1', 'di.faq.a13.p2', 'di.faq.a13.p3'] },
    ],
  },
];

const trackEvent = (name: string, data: Record<string, unknown> = {}) => {
  try {
    const w = window as unknown as { dataLayer?: unknown[] };
    if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push({ event: name, ...data });
    }
  } catch {
    // analytics failures must not block navigation
  }
};

const DentalImplants = () => {
  const { t, lang } = useLanguage();
  const [openFaqs, setOpenFaqs] = useState<Record<string, boolean>>({});

  useEffect(() => {
    document.title = t('di.meta.title');
    const setMeta = (selector: string, attr: string, name: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    setMeta('meta[name="description"]', 'name', 'description', t('di.meta.desc'));
    setMeta('meta[property="og:title"]', 'property', 'og:title', t('di.meta.title'));
    setMeta('meta[property="og:description"]', 'property', 'og:description', t('di.meta.desc'));
    setMeta('meta[property="og:url"]', 'property', 'og:url', PUBLIC_URL);
    setMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', PUBLIC_URL);

    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
  }, [t, lang]);

  // Structured data
  useEffect(() => {
    const faqEntities = FAQ_CATEGORIES.flatMap((cat) =>
      cat.items.map((item) => ({
        '@type': 'Question',
        name: t(item.qKey),
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.aKeys.map((k) => t(k)).join('\n\n'),
        },
      })),
    );

    const jsonld = [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dr-patrick-wu.lovable.app/' },
          { '@type': 'ListItem', position: 2, name: t('di.hero.eyebrow'), item: PUBLIC_URL },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Dr. Patrick Wu',
        jobTitle: 'Dentist',
        url: 'https://dr-patrick-wu.lovable.app/',
        alumniOf: 'University of Pennsylvania School of Dental Medicine',
        worksFor: [
          { '@type': 'Dentist', name: LM.name, url: LM.website },
          { '@type': 'Dentist', name: FD.name, url: FD.website },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        url: PUBLIC_URL,
        name: t('di.meta.title'),
        description: t('di.meta.desc'),
        inLanguage: lang === 'zh' ? 'zh-Hant' : 'en',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqEntities,
      },
    ];

    const scriptId = 'di-jsonld';
    let s = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!s) {
      s = document.createElement('script');
      s.id = scriptId;
      s.type = 'application/ld+json';
      document.head.appendChild(s);
    }
    s.textContent = JSON.stringify(jsonld);
    return () => {
      s?.remove();
    };
  }, [t, lang]);

  const toggleFaq = (id: string, qKey: string) => {
    const willOpen = !openFaqs[id];
    setOpenFaqs((prev) => ({ ...prev, [id]: willOpen }));
    if (willOpen) trackEvent('implant_faq_open', { question: qKey, language: lang, page: '/dental-implants' });
  };

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const highlights = [
    { key: 'di.exp.1', Icon: Award },
    { key: 'di.exp.2', Icon: Activity },
    { key: 'di.exp.3', Icon: ShieldCheck },
    { key: 'di.exp.4', Icon: Sparkles },
  ];

  const principles = [1, 2, 3, 4, 5] as const;
  const miBenefits = [1, 2, 3, 4, 5, 6] as const;
  const systemsBullets = [1, 2, 3, 4, 5, 6, 7] as const;

  const digitalItems = [
    { key: 'di.digital.item.1', Icon: Scan },
    { key: 'di.digital.item.2', Icon: ScanLine },
    { key: 'di.digital.item.3', Icon: Layers },
    { key: 'di.digital.item.4', Icon: Cpu },
    { key: 'di.digital.item.5', Icon: Target },
  ];

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        {/* 1. HERO */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="space-y-5 order-2 md:order-1">
                <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium">
                  {t('di.hero.eyebrow')}
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight leading-tight">
                  {t('di.hero.h1')}
                </h1>
                <div className="w-12 h-0.5 bg-accent" />
                <p className="text-base md:text-[17px] text-muted-foreground leading-[1.7]">
                  {t('di.hero.support')}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      trackEvent('implant_book_click', { cta: 'hero_choose_clinic', language: lang, position: 'hero' });
                      scrollToId('choose-clinic');
                    }}
                    className="btn-clinic min-h-11"
                  >
                    {t('di.hero.ctaPrimary')}
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToId('implant-overview')}
                    className="inline-flex items-center justify-center px-8 py-3 border border-border text-foreground font-medium tracking-wide rounded transition-colors hover:bg-secondary min-h-11"
                  >
                    {t('di.hero.ctaSecondary')}
                  </button>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pt-2">
                  {t('di.hero.note')}
                </p>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <img
                  src={drWuPhoto}
                  alt="Dr. Patrick Wu"
                  width={480}
                  height={640}
                  className="rounded-lg shadow-lg w-full max-w-[320px] md:max-w-[420px] object-cover aspect-[3/4]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. EXPERIENCE HIGHLIGHTS */}
        <section className="bg-secondary py-12 md:py-16">
          <div className="section-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {highlights.map(({ key, Icon }) => (
                <div key={key} className="flex flex-col items-center text-center gap-3 p-4">
                  <Icon className="text-accent" size={28} strokeWidth={1.5} />
                  <p className="text-sm md:text-base font-medium text-foreground leading-snug">
                    {t(key)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. DR. WU EXPERIENCE */}
        <section id="implant-overview" className="section-padding bg-background">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <h2 className="heading-section mb-4">{t('di.experience.title')}</h2>
                <div className="w-12 h-0.5 bg-accent" />
              </div>
              <div className="space-y-5 text-base md:text-[17px] text-muted-foreground leading-[1.7]">
                <p>{t('di.experience.p1')}</p>
                <p>{t('di.experience.p2')}</p>
                <p>{t('di.experience.p3')}</p>
                <p>{t('di.experience.p4')}</p>
                <p>{t('di.experience.p5')}</p>
                <p className="text-xs text-muted-foreground/80 border-l-2 border-accent pl-4 italic">
                  {t('di.experience.note')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. DIGITAL TECHNOLOGY */}
        <section className="section-padding bg-secondary">
          <div className="section-container">
            <div className="text-center mb-14 space-y-4">
              <h2 className="heading-section">{t('di.digital.title')}</h2>
              <div className="divider-accent" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-10">
              {digitalItems.map(({ key, Icon }) => (
                <div
                  key={key}
                  className="bg-background rounded-lg border border-border/50 p-5 flex flex-col items-center text-center gap-3"
                >
                  <Icon className="text-accent" size={26} strokeWidth={1.5} />
                  <p className="text-sm font-medium text-foreground leading-snug">
                    {t(key)}
                  </p>
                </div>
              ))}
            </div>
            <div className="max-w-3xl mx-auto space-y-4 text-base md:text-[17px] text-muted-foreground leading-[1.7]">
              <p>{t('di.digital.p1')}</p>
              <p>{t('di.digital.p2')}</p>
              <p>{t('di.digital.p3')}</p>
            </div>
          </div>
        </section>

        {/* 5. MINIMALLY INVASIVE */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <h2 className="heading-section mb-4">{t('di.mi.title')}</h2>
                <div className="w-12 h-0.5 bg-accent" />
              </div>
              <div className="space-y-5">
                <p className="text-base md:text-[17px] text-muted-foreground leading-[1.7]">
                  {t('di.mi.p1')}
                </p>
                <p className="text-base md:text-[17px] text-muted-foreground leading-[1.7]">
                  {t('di.mi.p2')}
                </p>
                <ul className="space-y-2 pt-2">
                  {miBenefits.map((n) => (
                    <li key={n} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                      <span>{t(`di.mi.b${n}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6. IMPLANT SYSTEMS AND MATERIALS */}
        <section className="section-padding bg-secondary">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <h2 className="heading-section mb-4">{t('di.systems.title')}</h2>
                <div className="w-12 h-0.5 bg-accent" />
              </div>
              <div className="space-y-5 text-base md:text-[17px] text-muted-foreground leading-[1.7]">
                <p>{t('di.systems.p1')}</p>
                <p>{t('di.systems.p2')}</p>
                <ul className="space-y-2 pt-2 text-sm text-foreground">
                  {systemsBullets.map((n) => (
                    <li key={n} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                      <span>{t(`di.systems.b${n}`)}</span>
                    </li>
                  ))}
                </ul>
                <p>{t('di.systems.p3')}</p>
                <p>{t('di.systems.p4')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FIVE PRINCIPLES */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="text-center mb-14 space-y-4">
              <h2 className="heading-section">{t('di.principles.title')}</h2>
              <div className="divider-accent" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {principles.map((n) => (
                <div
                  key={n}
                  className="bg-secondary/50 rounded-lg border border-border/50 p-6 flex flex-col"
                >
                  <div className="text-accent text-sm font-semibold mb-2">0{n}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {t(`di.principles.${n}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-[1.7]">
                    {t(`di.principles.${n}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section id="implant-faq" className="section-padding bg-secondary">
          <div className="section-container max-w-4xl">
            <div className="text-center mb-14 space-y-4">
              <h2 className="heading-section">{t('di.faq.title')}</h2>
              <div className="divider-accent" />
            </div>
            <div className="space-y-10">
              {FAQ_CATEGORIES.map((cat, ci) => (
                <div key={cat.titleKey}>
                  <h3 className="text-sm uppercase tracking-[0.15em] text-accent font-semibold mb-4">
                    {t(cat.titleKey)}
                  </h3>
                  <div className="divide-y divide-border border-y border-border bg-background">
                    {cat.items.map((item, ii) => {
                      const id = `faq-${ci}-${ii}`;
                      const open = !!openFaqs[id];
                      return (
                        <div key={id}>
                          <h4>
                            <button
                              type="button"
                              onClick={() => toggleFaq(id, item.qKey)}
                              aria-expanded={open}
                              aria-controls={`${id}-panel`}
                              className="w-full flex items-center justify-between gap-4 py-5 px-4 md:px-6 text-left min-h-11 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                            >
                              <span className="text-base md:text-lg font-medium text-foreground">
                                {t(item.qKey)}
                              </span>
                              <ChevronDown
                                size={20}
                                className={`shrink-0 text-muted-foreground transition-transform motion-reduce:transition-none ${open ? 'rotate-180' : ''}`}
                              />
                            </button>
                          </h4>
                          <div
                            id={`${id}-panel`}
                            role="region"
                            hidden={!open}
                            className="pb-6 px-4 md:px-6 space-y-3 text-base text-muted-foreground leading-[1.7]"
                          >
                            {item.aKeys.map((k) => (
                              <p key={k}>{t(k)}</p>
                            ))}
                            {item.srcKey && (
                              <p className="text-xs text-muted-foreground/70 italic">
                                {t(item.srcKey)}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. CHOOSE A CLINIC */}
        <section id="choose-clinic" className="section-padding bg-background">
          <div className="section-container">
            <div className="text-center mb-14 space-y-4 max-w-3xl mx-auto">
              <h2 className="heading-section">{t('di.clinic.title')}</h2>
              <div className="divider-accent" />
              <p className="text-base md:text-[17px] text-muted-foreground leading-[1.7]">
                {t('di.clinic.support')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* LM */}
              <article className="bg-secondary/50 rounded-lg border border-border/50 p-8 flex flex-col">
                <img src={lmLogo} alt={LM.name} className="h-10 self-start mb-4" />
                <p className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-2">
                  {t('di.clinic.lm.city')}
                </p>
                <h3 className="text-xl font-semibold text-foreground mb-4">{LM.name}</h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                  <p className="flex items-start gap-2">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                    <span>{LM.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone size={16} className="shrink-0 text-accent" />
                    <span>{LM.tel}</span>
                  </p>
                </div>
                <div className="flex flex-col gap-2 mt-auto">
                  <a
                    href={LM.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent('implant_little_mountain_book_click', {
                        clinic: 'little_mountain',
                        language: lang,
                        page: '/dental-implants',
                      })
                    }
                    className="btn-clinic min-h-11"
                  >
                    {t('di.clinic.lm.book')}
                  </a>
                  <a
                    href={LM.telHref}
                    onClick={() =>
                      trackEvent('implant_call_click', {
                        clinic: 'little_mountain',
                        language: lang,
                      })
                    }
                    className="inline-flex items-center justify-center px-8 py-3 border border-border text-foreground font-medium tracking-wide rounded hover:bg-secondary transition-colors min-h-11"
                  >
                    <Phone size={16} className="mr-2" />
                    {t('di.clinic.lm.call')}
                  </a>
                  <a
                    href={LM.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent('implant_location_select', {
                        clinic: 'little_mountain',
                        action: 'visit_website',
                        language: lang,
                      })
                    }
                    className="inline-flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors py-2 min-h-11"
                  >
                    {t('di.clinic.website')}
                    <ExternalLink size={14} />
                  </a>
                </div>
              </article>

              {/* FD */}
              <article className="bg-secondary/50 rounded-lg border border-border/50 p-8 flex flex-col">
                <img src={friendlyLogo} alt={FD.name} className="h-10 self-start mb-4" />
                <p className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-2">
                  {t('di.clinic.fd.city')}
                </p>
                <h3 className="text-xl font-semibold text-foreground mb-4">{FD.name}</h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                  <p className="flex items-start gap-2">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                    <span>{FD.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone size={16} className="shrink-0 text-accent" />
                    <span>{FD.tel}</span>
                  </p>
                </div>
                <div className="flex flex-col gap-2 mt-auto">
                  <a
                    href={FD.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent('implant_friendly_book_click', {
                        clinic: 'friendly',
                        language: lang,
                        page: '/dental-implants',
                      })
                    }
                    className="btn-clinic min-h-11"
                  >
                    {t('di.clinic.fd.book')}
                  </a>
                  <a
                    href={FD.telHref}
                    onClick={() =>
                      trackEvent('implant_call_click', {
                        clinic: 'friendly',
                        language: lang,
                      })
                    }
                    className="inline-flex items-center justify-center px-8 py-3 border border-border text-foreground font-medium tracking-wide rounded hover:bg-secondary transition-colors min-h-11"
                  >
                    <Phone size={16} className="mr-2" />
                    {t('di.clinic.fd.call')}
                  </a>
                  <a
                    href={FD.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent('implant_location_select', {
                        clinic: 'friendly',
                        action: 'visit_website',
                        language: lang,
                      })
                    }
                    className="inline-flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors py-2 min-h-11"
                  >
                    {t('di.clinic.website')}
                    <ExternalLink size={14} />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 10. MEDICAL NOTICE */}
        <section className="py-12 bg-secondary">
          <div className="section-container max-w-3xl">
            <p className="text-xs md:text-sm text-muted-foreground leading-[1.7] border-l-2 border-accent/60 pl-4 italic">
              {t('di.notice')}
            </p>
          </div>
        </section>
      </main>

      {/* Mobile sticky CTA — Dr. Patrick Wu website: Choose a Clinic only */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-t border-border"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="p-3">
          <button
            type="button"
            onClick={() => {
              trackEvent('implant_book_click', { cta: 'sticky_choose_clinic', language: lang, position: 'sticky' });
              scrollToId('choose-clinic');
            }}
            className="btn-clinic w-full min-h-11 text-sm"
          >
            {t('di.sticky.choose')}
          </button>
        </div>
      </div>

      <div className="pb-20 md:pb-0">
        <Footer />
      </div>
    </>
  );
};

export default DentalImplants;
