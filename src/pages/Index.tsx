import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutDrWu from '@/components/AboutDrWu';
import AreasOfFocus from '@/components/AreasOfFocus';
import OurClinics from '@/components/OurClinics';
import InsideOurClinics from '@/components/InsideOurClinics';
import WhyChooseUs from '@/components/WhyChooseUs';
import BrandStatement from '@/components/BrandStatement';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <HeroSection />
        <AboutDrWu />
        <AreasOfFocus />
        <OurClinics />
        <InsideOurClinics />
        <WhyChooseUs />
        <BrandStatement />
      </main>
      <Footer />
    </LanguageProvider>
  );
};

export default Index;
