import React, { useRef, useState } from 'react';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { classNames } from '@/lib/helpers';
import useOutsideDetection from '@/components/hooks/useOutsideDetection';

const SearchPrice = () => {
  const [minPrice, setMinPrice] = useState(0.01);
  const [maxPrice, setMaxPrice] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const searchPriceRef = useRef(null);
  useOutsideDetection(searchPriceRef, () => {
    setIsActive(false);
  });

  return (
    <div
      className={classNames(
        isActive ? 'dark:bg-slate-700 bg-white shadow-xl' : null,
        'flex flex-1 relative items-center p-7 lg:rounded-full w-full cursor-pointer'
      )}
      onClick={() => {
        setIsActive(true);
      }}
      ref={searchPriceRef}
    >
      <CurrencyDollarIcon className="w-8 h-8 text-gray-400 dark:text-slate-200 mr-3" />
      <div className="flex-grow">
        <div className="font-semibold">
          {minPrice} ETH - {maxPrice} ETH
        </div>
        <span className="block font-light text-sm text-slate-400 leading-none">
          Price range
        </span>
      </div>

      <div
        className={classNames(
          isActive ? null : 'hidden',
          'absolute min-w-[300px] bg-white dark:bg-slate-800 shadow-xl w-full left-0 rounded-xl z-30 mt-3 py-3 top-full'
        )}
      >
        lol
      </div>
    </div>
  );
};

export default SearchPrice;
