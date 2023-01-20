import useOutsideDetection from '@/components/hooks/useOutsideDetection';
import { BellIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

const mockNotifactions = [
  {
    user: 'Jaro',
    message: 'liked your post',
    time: '3 min ago',
    avatar: '/images/me.jpg',
    unread: true,
  },
  {
    user: 'Jaro',
    message: 'reposted your post',
    time: '7 min ago',
    avatar: '/images/me.jpg',
    unread: true,
  },
  {
    user: 'Jaro',
    message: 'uploaded a new NFT',
    time: '1 hour ago',
    avatar: '/images/me.jpg',
    unread: true,
  },
];

const Notifications = () => {
  const [showMenu, setShowMenu] = useState(false);

  const notificationsRef = useRef(null);
  useOutsideDetection(notificationsRef, () => {
    setShowMenu(false);
  });

  return (
    <div className="relative" ref={notificationsRef}>
      <button
        className="hover:dark:bg-slate-800 hover:bg-slate-200 rounded-full p-3 relative"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <span className="absolute bg-blue-500 rounded-full top-2 right-2 h-2 w-2 animate-pulse duration-500"></span>
        <BellIcon className="w-6 h-6" />
      </button>

      {showMenu ? (
        <div className="absolute z-10 w-screen max-w-xs sm:max-w-sm translate-y-0 -right-28 sm:right-0 mt-3">
          <div className="dark:bg-slate-800 bg-white p-5 rounded-2xl grid grid-cols-1 gap-3 border border-slate-200 dark:border-slate-700">
            <h3 className="font-semibold text-xl">Notifications</h3>
            {mockNotifactions.map((notification, i) => (
              <div
                className="relative flex p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg cursor-pointer"
                key={i}
              >
                <Image
                  className="rounded-full my-auto border w-12 h-12 dark:border-gray-700 border-gray-200"
                  alt="avatar"
                  src={notification.avatar}
                  width={50}
                  height={50}
                />
                <div className="ml-5 space-y-1">
                  <p className="font-medium text-sm">{notification.user}</p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-400">{notification.time}</p>
                </div>
                <div className="absolute right-5 h-2 w-2 top-1/2 bg-blue-500 rounded-full animate-pulse duration-500 transform -translate-y-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Notifications;
