import BrowseCategory from '@/components/marketplace/BrowseCategory/BrowseCategory';
import Footer from '@/components/marketplace/Footer/Footer';
import HeroSection from '@/components/marketplace/HeroSection/HeroSection';
import MainLayout from '@/components/marketplace/Layout/MainLayout';
import NtfOverview from '@/components/marketplace/NtfOverview/NtfOverview';
import PopularCreator from '@/components/marketplace/PopularCreator/PopularCreator';
import Steps from '@/components/marketplace/Steps/Steps';

const Marketplace = () => {
  const nftMock = { likes: 13, title: 'I am a test', price: '1.000' };
  const categoriesMock = [
    {
      name: 'Arts',
      color: 'blue',
      amount: 1337,
      image: '/images/categories/arts.jpeg',
    },
    {
      name: 'Entertainment',
      color: 'red',
      amount: 2313,
      image: '/images/categories/entertainment.jpeg',
    },
    {
      name: 'Music',
      color: 'pink',
      amount: 4313,
      image: '/images/categories/music.jpeg',
    },
    {
      name: 'News',
      color: 'green',
      amount: 5341,
      image: '/images/categories/news.jpeg',
    },
    {
      name: '3D Models',
      color: 'yellow',
      amount: 1243,
      image: '/images/categories/3d.jpeg',
    },
    {
      name: 'Sports',
      color: 'purple',
      amount: 5343,
      image: '/images/categories/sport.jpeg',
    },
  ];

  return (
    <MainLayout>
      <div className="container px-5 mt-5 lg:mt-20 mx-auto pb-20 lg:pb-30">
        <HeroSection />
        <Steps />
      </div>
      <NtfOverview nftData={nftMock} />
      <PopularCreator />
      <BrowseCategory categories={categoriesMock} options={null} />
    </MainLayout>
  );
};

export default Marketplace;
