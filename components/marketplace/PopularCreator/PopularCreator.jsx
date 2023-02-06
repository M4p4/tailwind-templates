import { classNames } from '@/lib/helpers';
import {
  ArrowTrendingUpIcon,
  FireIcon,
  UserPlusIcon,
} from '@heroicons/react/24/solid';
import React, { useState } from 'react';

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

const PopularCreator = () => {
  const [mode, setMode] = useState(0);

  const changeMode = (newMode) => {
    setMode(newMode);
  };

  return (
    <div className="md:container px-5 mt-5 lg:mt-20 mx-auto pb-20 lg:pb-30 bg-black/20 rounded-2xl">
      <h2 className="text-4xl text-center font-semibold pt-12 mb-12">
        Daily Top Creators.
      </h2>

      <div className="flex flex-row items-center max-w-2xl mx-auto justify-between bg-slate-700 p-1 rounded-full">
        {Buttons.map((button, i) => (
          <div
            key={i}
            onClick={changeMode.bind(null, i)}
            className={classNames(
              mode === i ? 'bg-sky-600' : 'hover:text-white',
              'inline-flex p-3 rounded-full w-full justify-center items-center cursor-pointer'
            )}
          >
            {button.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCreator;
