import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React from 'react';
import SearchInput from './SearchInput';
import SearchItem from './SearchItem';
import SearchPrice from './SearchPrice';
import SearchSale from './SearchSale';

const Search = () => {
  return (
    <div className="relative flex flex-col lg:flex-row justify-between items-center bg-white dark:bg-slate-800 w-full rounded-[40px] lg:rounded-full mt-5 lg:-mt-[50px] shadow-xl z-10 divide-y divide-slate-700 lg:divide-y-0">
      <SearchInput />
      <SearchItem />
      <SearchSale />
      <SearchPrice />
      <div className="flex flex-1 relative w-full items-end justify-end lg:max-w-[4px]">
        <div className="bg-sky-600 cursor-pointer hover:bg-sky-700 rounded-full p-4 lg:mr-4 w-full lg:w-auto text-center">
          <div className="inline-flex lg:flex items-center space-x-3 lg:space-x-0">
            <span className="lg:hidden font-medium text-xl text-slate-200">
              Search
            </span>
            <MagnifyingGlassIcon className="w-8 h-8 text-slate-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
