import React, { useRef, useState } from 'react';
import {
  DocumentMagnifyingGlassIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import useOutsideDetection from '@/components/hooks/useOutsideDetection';
import { classNames } from '@/lib/helpers';

const mockData = [
  'Example Item #1',
  'Example Item #2',
  'Example Item #3',
  'Example Item #4',
];

const SearchInput = () => {
  const [isActive, setIsActive] = useState(false);
  const searchInputRef = useRef(null);
  useOutsideDetection(searchInputRef, () => {
    setIsActive(false);
  });

  return (
    <div
      className={classNames(
        isActive ? 'dark:bg-slate-700 bg-white shadow-xl rounded-full' : null,
        'flex flex-1 relative items-center p-7 lg:rounded-full w-full cursor-pointer'
      )}
      onClick={() => {
        setIsActive(true);
      }}
      ref={searchInputRef}
    >
      <DocumentMagnifyingGlassIcon className="w-8 h-8 text-gray-400 dark:text-slate-200" />
      <div className="ml-3 flex-grow">
        <input
          className={classNames(
            isActive ? 'dark:bg-slate-700' : 'dark:bg-slate-800',
            'block  focus:outline-none dark:placeholder:text-slate-200 placeholder:text-slate-800 placeholder:font-semibold'
          )}
          type="text"
          placeholder="Search NTFs"
        />
        <span className="block font-light text-sm text-slate-400 leading-none">
          {isActive ? 'NFT search' : 'What are you looking for?'}
        </span>
      </div>
      <div
        className={classNames(
          isActive ? null : 'hidden',
          'absolute min-w-[300px] bg-white dark:bg-slate-800 shadow-xl w-full left-0 rounded-xl z-30 mt-3 py-3 top-full'
        )}
      >
        <ul>
          {mockData.map((md) => (
            <li
              key={md}
              className="inline-flex items-center hover:bg-slate-200 dark:hover:bg-slate-700 w-full py-4 px-6 cursor-pointer"
            >
              <MapPinIcon className="w-5 h-5 text-gray-400 mr-3" />
              {md}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchInput;
