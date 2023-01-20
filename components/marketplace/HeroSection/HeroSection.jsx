import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
        <div className="flex flex-col space-y-12 w-full lg:w-1/2 pb-14 lg:pr-1">
          <h1 className="font-bold text-4xl md:text-5xl xl:text-6xl !leading-[60px]">
            Explore, collect, and trade NFTs 🖼
          </h1>
          <p className="text-xl text-slate-400">
            Discover the most outstanding NTFs in all topics of life. Creative
            your NTFs and sell them
          </p>
          <div className="flex items-center justify-center p-3 bg-sky-600 hover:bg-sky-700 rounded-full w-full text-slate-200 lg:max-w-xs text-center font-medium cursor-pointer">
            Start your search <MagnifyingGlassIcon className="ml-1 w-5 h-5" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex-grow ">
          <Image
            className="rounded-xl w-full"
            src="/images/hero-1.jpeg"
            alt="hero image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
