import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Header
  'nav.about': { en: 'About', zh: '關於醫師' },
  'nav.services': { en: 'Services', zh: '服務項目' },
  'nav.clinics': { en: 'Our Clinics', zh: '我們的診所' },
  'nav.gallery': { en: 'Gallery', zh: '診所環境' },
  'nav.contact': { en: 'Contact', zh: '聯絡我們' },

  // Hero
  'hero.tagline': { en: 'Attentive. Sincere. Patient.', zh: '用心。真誠。耐心。' },
  'hero.subtitle': { en: 'Two established dental clinics serving Vancouver and Richmond.', zh: '兩間知名牙醫診所，服務溫哥華與列治文。' },
  'hero.description': { en: 'Providing comprehensive dental care for patients of all ages, with a focus on comfort, precision, and long-term oral health.', zh: '為各年齡層的患者提供全面的牙科照護，專注於舒適、精準與長期口腔健康。' },
  'hero.cta': { en: 'Explore Our Clinics', zh: '探索我們的診所' },

  // About Dr. Wu
  'about.title': { en: 'About Dr. Patrick Wu', zh: '關於吳柏翰醫師' },
  'about.degree': { en: 'D.M.D.', zh: 'D.M.D.' },
  'about.cred1': { en: 'University of Pennsylvania, School of Dental Medicine, 2009', zh: '賓夕法尼亞大學牙醫學院，2009年' },
  'about.cred2': { en: 'Clinical Assistant Professor, University of British Columbia', zh: '英屬哥倫比亞大學臨床助理教授' },
  'about.cred3': { en: 'Associate Fellow, American Association of Implant Dentistry', zh: '美國植牙學會副研究員' },
  'about.bio': {
    en: 'Dr. Patrick Wu graduated with honours from the University of Pennsylvania School of Dental Medicine. After practicing in New Jersey, he returned to Vancouver in 2012 and has since been dedicated to providing comprehensive, patient-centered dental care.',
    zh: '吳柏翰醫師以優異成績畢業於賓夕法尼亞大學牙醫學院。在新澤西州執業後，他於2012年回到溫哥華，從此致力於提供全面、以患者為中心的牙科照護。'
  },
  'about.focus': {
    en: 'His clinical focus includes implant dentistry, orthodontics, pediatric care, and complex restorative treatments.',
    zh: '他的臨床專長包括植牙、矯正、兒童牙科及複雜的修復治療。'
  },
  'about.owner': {
    en: 'Dr. Wu is the owner of both Friendly Dental Centre and Little Mountain Dental Centre, and personally provides care at both locations to better serve patients across Vancouver and Richmond.',
    zh: '吳醫師是友善牙醫中心和小山牙醫中心的負責人，並親自在兩個診所提供照護，以更好地服務溫哥華和列治文的患者。'
  },

  // Areas of Focus
  'services.title': { en: 'Area of Focus', zh: '專業領域' },
  'services.implants': { en: 'Implant Dentistry', zh: '植牙專科' },
  'services.implants.desc': {
    en: 'Dental implants are a long-term solution for replacing missing teeth, designed to restore both function and aesthetics. Dr. Patrick Wu has extensive experience in implant planning and restoration, including complex cases such as full-arch rehabilitation and multi-stage treatments. His approach focuses on precision, stability, and long-term success, ensuring that each implant is carefully integrated to provide natural appearance and durable performance.',
    zh: '人工植牙是長期取代缺失牙齒的解決方案，旨在同時恢復功能與美觀。吳醫師在植牙規劃與重建方面擁有豐富經驗，包括全口重建及多階段治療等複雜案例。他著重精準、穩定與長期成效，使每一顆植牙都能自然融合，呈現自然外觀並提供持久的使用表現。',
  },
  'services.orthodontics': { en: 'Orthodontics', zh: '齒顎矯正' },
  'services.orthodontics.desc': {
    en: 'Orthodontic treatment is not only about straightening teeth, but also about achieving proper bite alignment and long-term oral health. Dr. Patrick Wu provides orthodontic care with a focus on functional balance, facial harmony, and stability. From early intervention to adult treatment, each case is carefully planned to ensure predictable results and lasting improvements in both appearance and function.',
    zh: '矯正治療不僅是排齊牙齒，更關乎咬合的正確排列與長期口腔健康。吳醫師的矯正治療著重於功能平衡、臉型協調與穩定性。從早期介入到成人矯正，每個案例皆經過縝密規劃，確保可預期的成果，並在外觀與功能上帶來持久的改善。',
  },

  // Our Clinics
  'clinics.title': { en: 'Our Clinics', zh: '我們的診所' },
  'clinics.friendly.desc': { en: 'A modern, family-focused dental clinic in Richmond offering comprehensive care in a welcoming and comfortable environment.', zh: '位於列治文的現代化家庭牙科診所，在溫馨舒適的環境中提供全面的牙科照護。' },
  'clinics.lm.desc': { en: 'A trusted community dental clinic in Vancouver, providing personalized care with a focus on patient comfort and well-being.', zh: '位於溫哥華的值得信賴的社區牙科診所，以患者舒適與健康為重點提供個人化照護。' },
  'clinics.visitFriendly': { en: 'Visit Friendly Dental Centre', zh: '前往友善牙醫中心' },
  'clinics.visitLM': { en: 'Visit Little Mountain Dental Centre', zh: '前往小山牙醫中心' },

  // Hours
  'hours.title': { en: 'Office Hours', zh: '門診時間' },
  'hours.monFri': { en: 'Mon – Fri', zh: '週一至週五' },
  'hours.sat': { en: 'Saturday', zh: '週六' },
  'hours.sun': { en: 'Sunday', zh: '週日' },
  'hours.closed': { en: 'Closed', zh: '休診' },

  // Gallery
  'gallery.title': { en: 'Inside Our Clinics', zh: '診所環境' },

  // Why Choose Us
  'why.title': { en: 'Why Choose Dr. Wu & His Clinics', zh: '為何選擇吳醫師與他的診所' },
  'why.exp': { en: 'Experienced and highly trained dental professionals', zh: '經驗豐富且訓練有素的牙醫專業團隊' },
  'why.personal': { en: 'Personalized, patient-focused care', zh: '個人化、以患者為中心的照護' },
  'why.tech': { en: 'Modern equipment and techniques', zh: '現代化的設備與技術' },
  'why.comfort': { en: 'Comfortable and welcoming environment', zh: '舒適且溫馨的環境' },
  'why.paragraph': {
    en: 'Our team is dedicated to helping patients achieve and maintain optimal oral health through a combination of experience, modern technology, and compassionate care. Every visit is designed to be comfortable, efficient, and tailored to your needs.',
    zh: '我們的團隊致力於透過豐富經驗、現代科技與關懷照護的結合，幫助患者達到並維持最佳口腔健康。每次就診都力求舒適、高效，並根據您的需求量身定制。'
  },

  // Brand Statement
  'brand.quote': { en: '"ATTENTIVE, SINCERE, PATIENT"', zh: '「用心、真誠、耐心」' },

  // Footer
  'footer.rights': { en: '© 2026 Dr. Patrick Wu. All rights reserved.', zh: '© 2026 吳柏翰醫師。版權所有。' },
  'footer.design': { en: 'Web Design by', zh: '網站設計：' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div className={lang === 'zh' ? 'lang-zh' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
