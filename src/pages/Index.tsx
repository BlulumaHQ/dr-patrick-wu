import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import LocationChooser from '@/components/LocationChooser';
import WhyChooseUs from '@/components/WhyChooseUs';
import AboutDrWu from '@/components/AboutDrWu';
import ClinicDetails from '@/components/ClinicDetails';
import MapsSection from '@/components/MapsSection';
import GallerySection from '@/components/GallerySection';
import BrandStatement from '@/components/BrandStatement';
import SupportText from '@/components/SupportText';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <HeroSection />
        <LocationChooser />
        <WhyChooseUs />
        <AboutDrWu />
        <ClinicDetails />
        <MapsSection />
        <GallerySection />
        <BrandStatement />
        <SupportText />
      </main>
      <Footer />
    </LanguageProvider>
  );
};

export default Index;
