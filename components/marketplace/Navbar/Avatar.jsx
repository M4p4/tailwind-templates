import useOutsideDetection from '@/components/hooks/useOutsideDetection';
import { classNames } from '@/lib/helpers';
import { UserIcon } from '@heroicons/react/24/outline';
import {
  ArrowLeftOnRectangleIcon,
  PencilSquareIcon,
  PhotoIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

const mockUserNav = [
  {
    name: 'My Profile',
    icon: <UserIcon className="w-5 h-5" />,
  },
  {
    name: 'My Items',
    icon: <PhotoIcon className="w-5 h-5" />,
  },
  {
    name: 'Edit Profile',
    icon: <PencilSquareIcon className="w-5 h-5" />,
  },
];

const Avatar = ({ smallSize = false }) => {
  const [showMenu, setShowMenu] = useState(false);
  const avatarRef = useRef(null);
  useOutsideDetection(avatarRef, () => {
    setShowMenu(false);
  });

  return (
    <div className="relative" ref={avatarRef}>
      <Image
        className={classNames(
          smallSize ? 'w-8 h-8' : 'w-10 h-10',
          'rounded-full border dark:border-gray-700 border-gray-200'
        )}
        alt="avatar"
        src="/images/me.jpg"
        width={50}
        height={50}
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      />
      {showMenu ? (
        <div
          className={classNames(
            'absolute z-20 w-screen max-w-[260px] px-4 mt-3 -right-20 sm:right-0 sm:px-0 translate-y-0'
          )}
        >
          <div className="dark:bg-slate-800 bg-white p-5 rounded-2xl grid grid-cols-1 gap-5 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center space-x-3">
              <Image
                className="rounded-full border w-12 h-12 dark:border-gray-700 border-gray-200"
                alt="avatar"
                src="/images/me.jpg"
                width={50}
                height={50}
              />
              <div className="flex flex-col items-start">
                <div className="font-semibold text-lg">Jaro</div>
                <span className="text-sm">0x1337133713...1337</span>
              </div>
            </div>
            <div className="w-full border-b border-slate-200 dark:border-slate-700"></div>
            <ul>
              {mockUserNav.map(({ name, icon }) => (
                <li
                  className="flex items-center p-2 dark:hover:bg-slate-700 hover:bg-slate-200 rounded-lg"
                  key={name}
                >
                  {icon}
                  <span className="ml-4">{name}</span>
                </li>
              ))}
            </ul>
            <div className="w-full border-b border-slate-200 dark:border-slate-700"></div>
            <ul>
              <li className="flex items-center p-2 dark:hover:bg-slate-700 hover:bg-slate-200 rounded-lg">
                <ArrowLeftOnRectangleIcon className="h-5 w-5" />
                <span className="ml-4">Disconnect</span>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Avatar;
