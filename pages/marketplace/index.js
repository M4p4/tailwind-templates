import HeroSection from '@/components/marketplace/HeroSection/HeroSection';
import MainLayout from '@/components/marketplace/Layout/MainLayout';
import NtfOverview from '@/components/marketplace/NtfOverview/NtfOverview';
import Steps from '@/components/marketplace/Steps/Steps';

const Marketplace = () => {
  const nftMock = { likes: 13 };

  return (
    <MainLayout>
      <div className="container px-5 mt-5 lg:mt-20 mx-auto pb-20 lg:pb-30">
        <HeroSection />
        <Steps />
      </div>
      <NtfOverview nftData={nftMock} />
    </MainLayout>
  );
};

export default Marketplace;
