import { classNames } from '@/lib/helpers';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

const BrowseCategory = () => {
  const [leftIsActive, setLeftIsActive] = useState(true);

  return (
    <div className="bg-slate-900 py-10 container px-5 mt-5 lg:mt-20 mx-auto pb-20 lg:pb-30">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col space-y-3">
          <h2 className="text-4xl font-semibold">Browse by category</h2>
          <div className="text-xl font-light text-gray-400">
            Explore the NFTs in the most featured categories.
          </div>
        </div>
        <div className="inline-flex space-x-3 items-end justify-end mt-3">
          <button
            onMouseEnter={() => setLeftIsActive(true)}
            className={classNames(
              leftIsActive ? 'border-slate-700' : 'border-slate-900',
              'hover:border-slate-700 border-2 p-1 rounded-full w-10 h-10'
            )}
          >
            <ChevronLeftIcon />
          </button>
          <button
            onMouseEnter={() => setLeftIsActive(false)}
            className={classNames(
              !leftIsActive ? 'border-slate-700' : 'border-slate-900',
              'hover:border-slate-700 border-2 p-1 rounded-full w-10 h-10'
            )}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrowseCategory;
