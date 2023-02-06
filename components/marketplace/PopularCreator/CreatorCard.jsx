import { classNames } from '@/lib/helpers';
import Image from 'next/image';
import React from 'react';

const CreatorCard = ({ creator }) => {
  const { name, avatar, image, following, eth, rank } = creator;
  return (
    <div className="flex flex-col dark:bg-slate-800 bg-white shadow-xl rounded-3xl">
      <div className="relative">
        <Image
          className="h-36 object-cover rounded-3xl overflow-hidden w-full"
          src={image}
          alt="example image"
          width={500}
          height={500}
        />
        {rank <= 3 ? (
          <div className="absolute top-2 left-3">
            <div
              className={classNames(
                rank === 1 ? 'bg-red-200 text-red-600' : null,
                rank === 2 ? 'bg-emerald-200 text-emerald-600' : null,
                rank === 3 ? 'bg-yellow-200 text-yellow-600' : null,
                'text-sm px-2 py-1 rounded-full'
              )}
            >{`${rank === 1 ? '🏆' : '🏅'} #${rank}`}</div>
          </div>
        ) : null}
      </div>
      <div className="p-4">
        <div className="relative flex items-center justify-center">
          <div className="absolute">
            <svg
              class="mx-auto h-14 -mt-5 text-white dark:text-slate-800 dark:group-hover:text-slate-800"
              width="134"
              height="54"
              viewBox="0 0 134 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M101.734 19.8581C99.2658 17.4194 96.9737 14.8065 94.5052 12.1935C94.1526 11.671 93.6237 11.3226 93.0947 10.8C92.7421 10.4516 92.5658 10.2774 92.2131 9.92903C85.6895 3.83226 76.6974 0 67 0C57.3026 0 48.3105 3.83226 41.6105 9.92903C41.2579 10.2774 41.0816 10.4516 40.7289 10.8C40.2 11.3226 39.8474 11.671 39.3184 12.1935C36.85 14.8065 34.5579 17.4194 32.0895 19.8581C23.2737 28.7419 11.4605 30.4839 -0.176331 30.8323V54H16.3974H32.0895H101.558H110.197H134V30.6581C122.363 30.3097 110.55 28.7419 101.734 19.8581Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="absolute mx-auto -top-6">
            <Image
              className="h-12 w-12 rounded-full"
              src={avatar}
              alt="example image"
              width={50}
              height={50}
            />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center mt-7">
          <div>
            <div className="block font-semibold">{name}</div>
            <div className="block text-sm">
              {eth} <span className="text-gray-400">ETH</span>
            </div>
          </div>
          {following ? (
            <div className="py-2 px-4 dark:bg-slate-900 bg-white hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border dark:border-gray-500 border-gray-200 rounded-full cursor-pointer text-sm">
              Following
            </div>
          ) : (
            <div className="py-2 px-4 bg-sky-600 hover:bg-sky-700 rounded-full cursor-pointer text-sm text-slate-100">
              Follow
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;
