import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Header
  'nav.locations': { en: 'Locations', zh: '診所位置' },
  'nav.about': { en: 'About', zh: '關於我們' },
  'nav.whyUs': { en: 'Why Us', zh: '為何選擇我們' },
  'nav.gallery': { en: 'Gallery', zh: '診所環境' },
  'nav.contact': { en: 'Contact', zh: '聯絡我們' },

  // Hero
  'hero.tagline': { en: 'Attentive. Sincere. Patient.', zh: '用心。真誠。耐心。' },
  'hero.subtitle': { en: 'Two modern dental clinics serving Vancouver & Richmond', zh: '兩間現代牙醫診所，服務溫哥華與列治文' },
  'hero.description': { en: 'Our team of professionals is dedicated to helping you and your family achieve optimal oral health.', zh: '我們的專業團隊致力於幫助您和您的家人達到最佳的口腔健康。' },

  // Location chooser
  'locations.title': { en: 'Choose Your Location', zh: '選擇您的診所' },
  'locations.subtitle': { en: 'Two convenient locations to better serve you', zh: '兩個便利的地點，為您提供更好的服務' },
  'locations.viewRichmond': { en: 'View Richmond Clinic', zh: '前往列治文診所網站' },
  'locations.viewVancouver': { en: 'View Vancouver Clinic', zh: '前往溫哥華診所網站' },
  'locations.richmond': { en: 'Richmond', zh: '列治文' },
  'locations.vancouver': { en: 'Vancouver', zh: '溫哥華' },

  // Hours
  'hours.title': { en: 'Office Hours', zh: '門診時間' },
  'hours.monFri': { en: 'Mon – Fri', zh: '週一至週五' },
  'hours.sat': { en: 'Saturday', zh: '週六' },
  'hours.sun': { en: 'Sunday', zh: '週日' },
  'hours.closed': { en: 'Closed', zh: '休診' },

  // Why Choose Us
  'why.title': { en: 'Why Choose Us?', zh: '為何選擇我們？' },
  'why.exp': { en: 'Experienced dental professionals', zh: '經驗豐富的牙醫專業團隊' },
  'why.personal': { en: 'Personalized patient care', zh: '個人化的患者照護' },
  'why.tech': { en: 'Modern technology & techniques', zh: '現代化的技術與設備' },
  'why.comfort': { en: 'Comfortable, patient-focused environment', zh: '舒適、以患者為中心的環境' },
  'why.paragraph': {
    en: "We're proud to offer our patients a range of services that are tailored to their unique needs. With two convenient locations and a team of experienced professionals, we're able to provide you with the personalized care you need to achieve optimal oral health. Also, our newly renovated offices are designed with your comfort in mind, and our friendly team is dedicated to ensuring that you feel at ease every step of the way. We take pride in staying up-to-date with the latest advancements in dental technology and techniques, and we're always here to answer any questions you may have about your treatment. When you choose Dr. Patrick Wu Dentistry, you can trust that you're in good hands. Come experience the difference for yourself.",
    zh: '我們很自豪能為患者提供量身定制的各項服務。憑藉兩個便利的地點和經驗豐富的專業團隊，我們能夠為您提供所需的個人化照護，幫助您達到最佳的口腔健康。此外，我們新裝修的診所以您的舒適為設計理念，我們友善的團隊致力於確保您在每一步都感到安心。我們以跟進最新的牙科技術和方法為榮，並隨時為您解答有關治療的任何問題。選擇吳柏翰牙醫，您可以放心您得到了最好的照護。歡迎親自體驗我們的不同之處。'
  },

  // About Dr. Wu
  'about.title': { en: 'About Dr. Patrick Wu', zh: '關於吳柏翰醫師' },
  'about.degree': { en: 'D.M.D.', zh: 'D.M.D.' },
  'about.cred1': { en: 'University of Pennsylvania, School of Dental Medicine, 2009', zh: '賓夕法尼亞大學牙醫學院，2009年' },
  'about.cred2': { en: 'Clinical Assistant Professor, University of British Columbia', zh: '英屬哥倫比亞大學臨床助理教授' },
  'about.cred3': { en: 'Associate Fellow, American Association of Implant Dentistry', zh: '美國植牙學會副研究員' },
  'about.bio': {
    en: 'Dr. Patrick Wu graduated with honours from the University of Pennsylvania School of Dental Medicine. After practicing dentistry in New Jersey for four years, he returned to Vancouver in 2012. Dr. Wu provides comprehensive care for patients of all ages, with special interests in implant dentistry, orthodontics, pediatric care, and complex restorative treatments.',
    zh: '吳柏翰醫師以優異成績畢業於賓夕法尼亞大學牙醫學院。在新澤西州執業四年後，他於2012年回到溫哥華。吳醫師為各年齡層的患者提供全面的照護，專長包括植牙、矯正、兒童牙科及複雜的修復治療。'
  },
  'about.owner': {
    en: 'Dr. Wu is the owner of both Friendly Dental Centre and Little Mountain Dental Centre, and provides care at both locations to better serve patients across Vancouver and Richmond.',
    zh: '吳醫師是友善牙醫中心和小山牙醫中心的負責人，並在兩個診所提供照護，以更好地服務溫哥華和列治文的患者。'
  },

  // Clinic Details
  'details.title': { en: 'Our Clinics', zh: '我們的診所' },
  'details.address': { en: 'Address', zh: '地址' },
  'details.phone': { en: 'Phone', zh: '電話' },

  // Maps
  'maps.title': { en: 'Find Us', zh: '如何前往' },

  // Gallery
  'gallery.title': { en: 'Our Environment', zh: '診所環境' },

  // Brand Statement
  'brand.quote': { en: '"ATTENTIVE, SINCERE, PATIENT"', zh: '「用心、真誠、耐心」' },

  // Support Text
  'support.text': {
    en: "Our team of professionals is dedicated to helping you and your family achieve optimal oral health. We're committed to providing the highest level of care and expertise, and we're here to answer any questions you may have about your dental health. Contact us today to schedule a consultation and take the first step towards a healthier, happier you.",
    zh: '我們的專業團隊致力於幫助您和您的家人達到最佳的口腔健康。我們承諾提供最高水準的照護和專業知識，並隨時為您解答有關口腔健康的任何問題。立即聯繫我們，預約看診，邁出邁向更健康、更快樂的第一步。'
  },

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
