import { classNames } from '@/lib/helpers';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Glide from '@glidejs/glide';

const BrowseCategory = ({ categories, options }) => {
  const [leftIsActive, setLeftIsActive] = useState(true);
  const sliderRef = useRef();

  useEffect(() => {
    const slider = new Glide(sliderRef.current, {
      type: 'slider',
      startAt: 0,
      bound: true,
      breakpoints: {
        800: {
          perView: 2,
        },
      },
      perView: 4,
      gap: 10,
    });
    slider.mount();
    return () => slider.destroy();
  });

  return (
    <div
      className="dark:bg-slate-900 bg-slate-50 py-10 container px-5 mt-5 lg:mt-20 mx-auto pb-20 lg:pb-30"
      ref={sliderRef}
    >
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col space-y-3">
          <h2 className="text-4xl font-semibold">Browse by category</h2>
          <div className="text-xl font-light dark:text-gray-400 text-gray-500">
            Explore the NFTs in the most featured categories.
          </div>
        </div>
        <div
          className="inline-flex space-x-3 items-end justify-end mt-3"
          data-glide-el="controls"
        >
          <button
            onMouseEnter={() => setLeftIsActive(true)}
            data-glide-dir="<"
            className={classNames(
              leftIsActive
                ? 'dark:border-slate-700 border-gray-300'
                : 'dark:border-slate-900 border-slate-50',
              'dark:hover:border-slate-700 hover:border-gray-300 border-2 p-1 rounded-full w-10 h-10'
            )}
          >
            <ChevronLeftIcon />
          </button>
          <button
            onMouseEnter={() => setLeftIsActive(false)}
            data-glide-dir=">"
            className={classNames(
              !leftIsActive
                ? 'dark:border-slate-700 border-gray-300'
                : 'dark:border-slate-900 border-slate-50',
              'dark:hover:border-slate-700 hover:border-gray-300 border-2 p-1 rounded-full w-10 h-10'
            )}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
      <div className="glide mt-5">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {categories.map((category, i) => (
              <li className="glide__slide" key={i}>
                <div className="flex flex-col">
                  <Image
                    className="rounded-2xl aspect-[4/3] object-cover h-36 w-96"
                    src={category.image}
                    width={300}
                    height={300}
                    alt={`${i}`}
                  />
                  <div className="mt-4 flex items-center">
                    <div
                      className={classNames(
                        category.color === 'green' ? 'bg-green-500' : null,
                        category.color === 'pink' ? 'bg-pink-500' : null,
                        category.color === 'blue' ? 'bg-blue-500' : null,
                        category.color === 'red' ? 'bg-red-500' : null,
                        category.color === 'yellow' ? 'bg-yellow-500' : null,
                        category.color === 'purple' ? 'bg-purple-500' : null,
                        'w-10 h-10 rounded-full'
                      )}
                    ></div>
                    <div className="ml-3">
                      <h2 className="text-base sm:text-lg font-medium truncate">
                        {category.name}
                      </h2>
                      <span className="block mt-1 text-sm dark:text-gray-400 text-gray-500">
                        {category.amount} NFTs
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BrowseCategory;
