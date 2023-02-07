import BrowseCategory from '@/components/marketplace/BrowseCategory/BrowseCategory';
import HeroSection from '@/components/marketplace/HeroSection/HeroSection';
import MainLayout from '@/components/marketplace/Layout/MainLayout';
import NtfOverview from '@/components/marketplace/NtfOverview/NtfOverview';
import PopularCreator from '@/components/marketplace/PopularCreator/PopularCreator';
import Steps from '@/components/marketplace/Steps/Steps';

const Marketplace = () => {
  const nftMock = { likes: 13, title: 'I am a test', price: '1.000' };

  return (
    <MainLayout>
      <div className="container px-5 mt-5 lg:mt-20 mx-auto pb-20 lg:pb-30">
        <HeroSection />
        <Steps />
      </div>
      <NtfOverview nftData={nftMock} />
      <PopularCreator />
      <BrowseCategory />
    </MainLayout>
  );
};

export default Marketplace;
