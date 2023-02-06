import { classNames } from '@/lib/helpers';
import { HeartIcon, VideoCameraIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useState } from 'react';

const NtfOverview = ({ nftData }) => {
  const { likes } = nftData;
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="bg-black/20 py-20 lg:py-30">
      <div className="container mx-auto px-5">
        <div className="flex lg:flex-row flex-col-reverse relative lg:justify-end">
          <div className="z-10 lg:absolute -mt-2 lg:-mt-0 bg-slate-900 rounded-3xl left-0 w-full lg:max-w-lg lg:top-1/2 lg:transform lg:-translate-y-1/2">
            <div className="p-8">
              <h2>I am a test</h2>
              <p>lol</p>
            </div>
          </div>
          <div className="w-full lg:w-[64%]">
            <div className="relative">
              <Image
                className="rounded-3xl object-cover w-full border-slate-800 border-[14px] max-h-[756px]"
                src="/images/overview/nft-1.png"
                width={512}
                height={512}
                alt="Nft"
              />
              <div className="absolute bottom-7 left-7">
                <div className="bg-black/50 rounded-full p-3">
                  <VideoCameraIcon className="lg:w-5 lg:h-5 w-3 h-3" />
                </div>
              </div>
              <div className="absolute top-7 right-7">
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
