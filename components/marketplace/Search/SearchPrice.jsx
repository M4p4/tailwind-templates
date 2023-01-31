import React, { useRef, useState } from 'react';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { classNames } from '@/lib/helpers';
import useOutsideDetection from '@/components/hooks/useOutsideDetection';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

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
          'absolute min-w-[300px] bg-white dark:bg-slate-800 shadow-xl w-full left-0 rounded-xl z-30 mt-0 lg:mt-3 py-3 top-full'
        )}
      >
        <div className="px-5 py-2">
          <span className="font-semibold">Range Price</span>
          <div className="pb-3"></div>
          <Slider
            range
            value={[minPrice, maxPrice]}
            min={0.01}
            max={10}
            onChange={(e) => {
              const [min, max] = e;
              setMaxPrice(max);
              setMinPrice(min);
            }}
          />

          <div className="flex flex-row justify-between items-center pt-5 text-sm">
            <div>
              <span className="font-medium">Min price</span>
              <div className="relative border border-slate-700 rounded-full w-24 mt-1">
                <input
                  className="bg-slate-800 focus:outline-none w-16 border-l border-slate-700 pl-3 rounded-l-full"
                  type="number"
                  value={minPrice}
                  min={0.01}
                  onChange={(e) => {
                    setMinPrice(+e.target.value || 0.01);
                  }}
                />
                <div className="absolute right-2 top-0 text-gray-400 text-sm">
                  ETH
                </div>
              </div>
            </div>
            <div>
              <span className="font-medium">Max price</span>
              <div className="relative border border-slate-700 rounded-full w-24 mt-1">
                <input
                  className="bg-slate-800 focus:outline-none w-16 border-l border-slate-700 pl-3 rounded-l-full"
                  type="number"
                  value={maxPrice}
                  max={10}
                  onChange={(e) => {
                    setMaxPrice(+e.target.value || 0.01);
                  }}
                />
                <div className="absolute right-2 top-0 text-gray-400 text-sm">
                  ETH
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPrice;
