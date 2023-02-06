import { classNames } from '@/lib/helpers';
import {
  ArrowTrendingUpIcon,
  FireIcon,
  UserPlusIcon,
} from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import CreatorCard from './CreatorCard';

const Buttons = [
  {
    text: (
      <>
        <FireIcon className="w-5 h-5 mr-3" /> Popular
      </>
    ),
  },
  {
    text: (
      <>
        <UserPlusIcon className="w-5 h-5 mr-3" />
        Following
      </>
    ),
  },
  {
    text: (
      <>
        <ArrowTrendingUpIcon className="w-5 h-5 mr-3" /> New & Rare
      </>
    ),
  },
];

const mockData = [
  {
    name: 'Jaro Ratz',
    eth: '13.337',
    following: false,
    avatar: '/images/me.jpg',
    image: '/images/hero/hero-2.jpeg',
  },
  {
    name: 'Jaro Ratz',
    eth: '14.337',
    following: true,
    avatar: '/images/me.jpg',
    image: '/images/hero/hero-3.jpeg',
  },
  {
    name: 'Jaro Ratz',
    eth: '42.337',
    following: false,
    avatar: '/images/me.jpg',
    image: '/images/hero/hero-1.jpeg',
  },
  {
    name: 'Jaro Ratz',
    eth: '22.337',
    following: true,
    avatar: '/images/me.jpg',
    image: '/images/hero/hero-2.jpeg',
  },
  {
    name: 'Jaro Ratz',
    eth: '44.337',
    following: false,
    avatar: '/images/me.jpg',
    image: '/images/hero/hero-1.jpeg',
  },
];

const PopularCreator = () => {
  const [mode, setMode] = useState(0);

  const changeMode = (newMode) => {
    setMode(newMode);
  };

  return (
    <div className="md:container px-5 mt-5 lg:mt-20 mx-auto pb-20 lg:pb-30 dark:bg-black/20 bg-gray-100 rounded-3xl">
      <h2 className="text-4xl text-center font-semibold pt-12 mb-12">
        Daily Top Creators.
      </h2>

      <div className="flex flex-row items-center max-w-2xl mx-auto justify-between dark:bg-slate-700 bg-white shadow-xl p-1 rounded-full">
        {Buttons.map((button, i) => (
          <div
            key={i}
            onClick={changeMode.bind(null, i)}
            className={classNames(
              mode === i
                ? 'bg-sky-600 text-slate-100'
                : 'dark:hover:text-white hover:text-slate-900 text-slate-700 dark:text-slate-200',
              'inline-flex p-3 rounded-full w-full justify-center items-center cursor-pointer'
            )}
          >
            {button.text}
          </div>
        ))}
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-12">
        {mockData.map((creator, i) => (
          <CreatorCard key={i} creator={creator} />
        ))}
      </div>
    </div>
  );
};

export default PopularCreator;
