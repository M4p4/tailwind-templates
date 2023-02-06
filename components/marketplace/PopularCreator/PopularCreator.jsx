import { classNames } from '@/lib/helpers';
import {
  ArrowTrendingUpIcon,
  FireIcon,
  UserPlusIcon,
} from '@heroicons/react/24/solid';
import React, { useState } from 'react';

const PopularCreator = () => {
  const [mode, setMode] = useState(1);

  const changeMode = (newMode) => {
    setMode(newMode);
  };

  return (
    <div className="container px-5 mt-5 lg:mt-20 mx-auto pb-20 lg:pb-30 bg-black/20 rounded-2xl">
      <h2 className="text-4xl text-center font-semibold pt-12 mb-12">
        Daily Top Creators.
      </h2>

      <div className="flex flex-row items-center max-w-2xl mx-auto justify-between bg-slate-700 p-1 rounded-full">
        <div
          onClick={changeMode.bind(null, 1)}
          className={classNames(
            mode === 1 ? 'bg-sky-600' : 'hover:text-white',
            'inline-flex p-3 rounded-full w-full justify-center items-center cursor-pointer'
          )}
        >
          <FireIcon className="w-5 h-5 mr-3" /> Popular
        </div>
        <div
          onClick={changeMode.bind(null, 2)}
          className={classNames(
            mode === 2 ? 'bg-sky-600' : 'hover:text-white',
            'inline-flex p-3 rounded-full w-full justify-center items-center cursor-pointer'
          )}
        >
          <UserPlusIcon className="w-5 h-5 mr-3" /> Following
        </div>
        <div
          onClick={changeMode.bind(null, 3)}
          className={classNames(
            mode === 3 ? 'bg-sky-600' : 'hover:text-white',
            'inline-flex p-3 rounded-full w-full justify-center items-center cursor-pointer'
          )}
        >
          <ArrowTrendingUpIcon className="w-5 h-5 mr-3" /> New & Rare
        </div>
      </div>
    </div>
  );
};

export default PopularCreator;
