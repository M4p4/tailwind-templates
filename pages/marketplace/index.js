import HeroSection from '@/components/marketplace/HeroSection/HeroSection';
import MainLayout from '@/components/marketplace/Layout/MainLayout';
import Steps from '@/components/marketplace/Steps/Steps';

const Marketplace = () => {
  return (
    <MainLayout>
      <HeroSection />
      <Steps />
    </MainLayout>
  );
};

export default Marketplace;
