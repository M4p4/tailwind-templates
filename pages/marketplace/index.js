import HeroSection from '@/components/marketplace/HeroSection/HeroSection';
import MainLayout from '@/components/marketplace/Layout/MainLayout';
import NtfOverview from '@/components/marketplace/NtfOverview/NtfOverview';
import Steps from '@/components/marketplace/Steps/Steps';

const Marketplace = () => {
  return (
    <MainLayout>
      <div className="container px-5 mt-5 lg:mt-20 mx-auto pb-20 lg:pb-30">
        <HeroSection />
        <Steps />
      </div>
      <NtfOverview />
    </MainLayout>
  );
};

export default Marketplace;
