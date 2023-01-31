import React, { useRef, useState } from 'react';
import { PhotoIcon } from '@heroicons/react/24/outline';
import useOutsideDetection from '@/components/hooks/useOutsideDetection';
import { classNames } from '@/lib/helpers';

const mockData = [
  { type: 'Image', desc: 'Items in JPG, PNG, GIF, SVG format', checked: true },
  { type: 'Video', desc: 'Items in MP4, WEBM, MP3 format', checked: true },
  { type: 'Audio', desc: 'Items in MP4, WEBM, MP3 format', checked: false },
];

const SearchItem = () => {
  const [isActive, setIsActive] = useState(false);
  const searchItemRef = useRef(null);
  useOutsideDetection(searchItemRef, () => {
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
      ref={searchItemRef}
    >
      <PhotoIcon className="w-8 h-8 text-gray-400 dark:text-slate-200 mr-3" />
      <div className="flex-grow">
        <div className="font-semibold">Item type</div>
        <span className="block font-light text-sm text-slate-400 leading-none">
          Type of Item
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
              className="inline-flex items-center w-full py-4 px-6 cursor-pointer"
            >
              <input type="checkbox" className="h-6 w-6" checked={md.checked} />
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

export default SearchItem;
