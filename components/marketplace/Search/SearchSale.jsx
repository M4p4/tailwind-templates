import { BoltIcon } from '@heroicons/react/24/outline';
import React, { useRef, useState } from 'react';
import useOutsideDetection from '@/components/hooks/useOutsideDetection';
import { classNames } from '@/lib/helpers';

const SearchSale = () => {
  const [isActive, setIsActive] = useState(false);
  const searchSaleRef = useRef(null);
  useOutsideDetection(searchSaleRef, () => {
    setIsActive(false);
  });

  const mockData = [
    {
      type: 'On Auction',
      desc: 'Items being auctioned',
      checked: true,
    },
    { type: 'Buy now', desc: 'Items being auctioned', checked: true },
    { type: 'New', desc: 'Items being auctioned', checked: false },
  ];

  return (
    <div
      className={classNames(
        isActive ? 'dark:bg-slate-700 bg-white shadow-xl' : null,
        'flex flex-1 relative items-center p-7 lg:rounded-full w-full cursor-pointer'
      )}
      onClick={() => {
        setIsActive(true);
      }}
      ref={searchSaleRef}
    >
      <BoltIcon className="w-8 h-8 text-gray-400 dark:text-slate-200 mr-3" />
      <div className="flex-grow">
        <div className="font-semibold">Sale type</div>
        <span className="block font-light text-sm text-slate-400 leading-none">
          Type of sale
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
              key={md.type}
              className="inline-flex items-center w-full py-4 px-6 cursor-pointer"
            >
              <input
                type="checkbox"
                className="h-6 w-6"
                checked={md.checked}
                readOnly
              />
              <div className="ml-3 flex flex-col">
                <div className="flex font-semibold">{md.type}</div>
                <div className="flex text-sm text-gray-400">{md.desc}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchSale;
