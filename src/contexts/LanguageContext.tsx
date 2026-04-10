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
  'services.title': { en: 'Areas of Focus', zh: '服務項目' },
  'services.implants': { en: 'Implant Dentistry', zh: '植牙' },
  'services.implants.desc': { en: 'Restoring function and aesthetics with long-lasting implant solutions.', zh: '以持久的植牙方案恢復功能與美觀。' },
  'services.orthodontics': { en: 'Orthodontics', zh: '矯正治療' },
  'services.orthodontics.desc': { en: 'Straightening teeth for improved function and confident smiles.', zh: '矯正牙齒以改善功能，展現自信笑容。' },
  'services.pediatric': { en: 'Pediatric Dentistry', zh: '兒童牙科' },
  'services.pediatric.desc': { en: 'Gentle, patient-focused care for children of all ages.', zh: '溫和、以患者為中心的兒童牙科照護。' },
  'services.restorative': { en: 'Restorative Dentistry', zh: '修復治療' },
  'services.restorative.desc': { en: 'Repairing and rebuilding damaged teeth for long-term health.', zh: '修復受損牙齒，維護長期口腔健康。' },
  'services.preventive': { en: 'Preventive & Maintenance Care', zh: '預防與維護照護' },
  'services.preventive.desc': { en: 'Routine exams and cleanings to maintain optimal oral health.', zh: '定期檢查和清潔，維持最佳口腔健康。' },
  'services.cosmetic': { en: 'Cosmetic Dentistry', zh: '美容牙科' },
  'services.cosmetic.desc': { en: 'Enhancing smile appearance through modern aesthetic treatments.', zh: '透過現代美學治療提升笑容外觀。' },

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
