import {
  MagnifyingGlassIcon,
  PhotoIcon,
  BoltIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import SearchInput from './SearchInput';

const Search = () => {
  return (
    <div className="relative flex flex-col lg:flex-row justify-between items-center bg-white dark:bg-slate-800 w-full rounded-[40px] lg:rounded-full mt-5 lg:-mt-[50px] shadow-xl z-10">
      <SearchInput />
      <div className="flex flex-1 relative items-center p-7 space-x-3 w-full">
        <PhotoIcon className="w-8 h-8 text-gray-400 dark:text-slate-200" />
        <div className="flex-grow">
          <div className="font-semibold">Item type</div>
          <span className="block font-light text-sm text-slate-400 leading-none">
            Type of Item
          </span>
        </div>
      </div>
      <div className="flex flex-1 relative items-center p-7 space-x-3 w-full">
        <BoltIcon className="w-8 h-8 text-gray-400 dark:text-slate-200" />
        <div className="flex-grow">
          <div className="font-semibold">Sale type</div>
          <span className="block font-light text-sm text-slate-400 leading-none">
            Type of sale
          </span>
        </div>
      </div>
      <div className="flex flex-1 relative items-center p-7 space-x-3 w-full">
        <CurrencyDollarIcon className="w-8 h-8 text-gray-400 dark:text-slate-200" />
        <div className="flex-grow">
          <div className="font-semibold">0.01 ETH - 10 ETH</div>
          <span className="block font-light text-sm text-slate-400 leading-none">
            Price range
          </span>
        </div>
      </div>
      <div className="flex flex-1 relative w-full items-end justify-end lg:mr-4 lg:max-w-[20px]">
        <div className="bg-sky-600 cursor-pointer hover:bg-sky-700 rounded-full p-4 w-full lg:w-auto text-center">
          <div className="inline-flex lg:flex items-center space-x-3 lg:space-x-0">
            <span className="lg:hidden font-medium text-xl">Search</span>
            <MagnifyingGlassIcon className="w-8 h-8 text-slate-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
