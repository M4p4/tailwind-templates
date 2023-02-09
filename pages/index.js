import TemplateCard from '@/components/index/TemplateCard/TemplateCard';
import Image from 'next/image';
import Link from 'next/link';

const templates = [
  {
    image: '/images/welcome/nft.jpeg',
    url: '/marketplace',
    title: 'NFT Marketplace',
  },
  {
    image: '/images/welcome/blog.jpeg',
    url: '/blog',
    title: 'Blog',
  },
];

const Home = () => {
  return (
    <div className="bg-slate-900 text-slate-200 min-h-screen relative pb-20">
      <h1 className="font-semibold text-4xl tracking-tight text-center text-slate-100 py-5">
        Tailwind Templates
      </h1>
      <div className="max-w-3xl w-full mx-auto bg-slate-800 text-slate-300 p-5 rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {templates.map((template) => (
            <TemplateCard key={template.title} template={template} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-5 w-full text-center">
        <span className="text-slate-400">Made with ❤️ by Jaro Ratz</span>
      </div>
    </div>
  );
};
export default Home;
