import { classNames, toBase64, shimmer } from '@/lib/helpers';
import { ClockIcon } from '@heroicons/react/24/outline';
import { HeartIcon, VideoCameraIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useState } from 'react';

const NtfOverview = ({ nftData }) => {
  const { likes, title, price } = nftData;
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="dark:bg-black/20 bg-gray-100 py-20 lg:py-30">
      <div className="container mx-auto px-5">
        <div className="flex lg:flex-row flex-col-reverse relative lg:justify-end">
          <div className="z-10 lg:absolute -mt-2 lg:-mt-0 dark:bg-slate-900 bg-white shadow-xl rounded-3xl left-0 w-full lg:max-w-lg lg:top-1/2 lg:transform lg:-translate-y-1/2">
            <div className="p-8 space-y-3">
              <h2 className="font-semibold text-2xl lg:text-3xl xl:text-4xl">
                {title}
              </h2>
              <div className="flex sm:flex-row flex-col sm:space-y-0 space-y-3 sm:space-x-12">
                <div className="flex items-center">
                  <Image
                    className="flex-shrink-0 rounded-full w-10 h-10"
                    src="/images/me.jpg"
                    alt="NFT creator"
                    width={50}
                    height={50}
                  />
                  <div className="ml-3">
                    <span className="text-xs dark:text-gray-400 text-gray-500">
                      Creator
                    </span>
                    <div className="text-sm font-semibold">Jaro Ratz</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Image
                    className="flex-shrink-0 rounded-full w-10 h-10"
                    src="/images/collection.png"
                    alt="NFT creator"
                    width={50}
                    height={50}
                  />
                  <div className="ml-3">
                    <span className="text-xs dark:text-gray-400 text-gray-500">
                      Collection
                    </span>
                    <div className="text-sm font-semibold">Ai Art</div>
                  </div>
                </div>
              </div>
              <div className="pt-6"></div>
              <div className="flex flex-col sm:flex-row border-2 border-emerald-500 rounded-xl p-5 relative items-center">
                <span className="absolute dark:text-gray-400 text-gray-500 -top-3 left-7 dark:bg-slate-900 bg-white px-2 text-sm">
                  Current Bid
                </span>
                <span className="text-emerald-500 text-3xl mr-3 font-semibold">
                  {price} ETH
                </span>
                <span className="dark:text-gray-400 text-gray-500 text-xl">
                  (≈ $13.37)
                </span>
              </div>

              <div className="space-y-5">
                <div className="flex items-center pt-5">
                  <ClockIcon className="w-8 h-8 mr-2 dark:text-gray-400 text-gray-500" />
                  <span className="dark:text-gray-400 text-gray-500 font-medium">
                    Auction ends in:
                  </span>
                </div>

                <div className="flex flex-row space-x-12 pt-3">
                  <div className="flex flex-col items-center">
                    <span className="text-4xl font-semibold">12</span>
                    <span className="dark:text-gray-400 text-gray-500 ">
                      days
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-4xl font-semibold">12</span>
                    <span className="dark:text-gray-400 text-gray-500 ">
                      hours
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-4xl font-semibold">12</span>
                    <span className="dark:text-gray-400 text-gray-500 ">
                      mins
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-4xl font-semibold">12</span>
                    <span className="dark:text-gray-400 text-gray-500 ">
                      secs
                    </span>
                  </div>
                </div>

                <div className="dark:bg-slate-700 bg-slate-300 h-[1px] w-full"></div>

                <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 sm:space-x-3">
                  <div className="bg-sky-600 hover:bg-sky-700 py-3 px-4 w-full rounded-full text-center cursor-pointer text-slate-100">
                    Place a bid
                  </div>
                  <div className="dark:border-slate-600 border-gray-300 dark:hover:bg-slate-800 hover:bg-slate-200 border py-3 px-4 w-full text-center rounded-full cursor-pointer">
                    View Item
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[64%]">
            <div className="relative">
              <Image
                className="rounded-3xl object-cover w-full dark:border-slate-800 border-white border-[14px] max-h-[756px] shadow-xl"
                src="/images/overview/nft-1.png"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(512, 512)
                )}`}
                width={512}
                height={512}
                alt="Nft"
              />
              <div className="absolute bottom-7 left-7 text-slate-100">
                <div className="bg-black/50 rounded-full p-3">
                  <VideoCameraIcon className="lg:w-5 lg:h-5 w-3 h-3" />
                </div>
              </div>
              <div className="absolute top-7 right-7 text-slate-100">
                <div
                  className="bg-black/50 rounded-full px-4 py-2 text-sm inline-flex items-center cursor-pointer"
                  onClick={() => {
                    setHasLiked(!hasLiked);
                  }}
                >
                  <HeartIcon
                    className={classNames(
                      hasLiked ? 'fill-red-500' : null,
                      'w-5 h-5 mr-1'
                    )}
                  />{' '}
                  {hasLiked ? likes + 1 : likes}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NtfOverview;
