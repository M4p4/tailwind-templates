import useOutsideDetection from '@/components/hooks/useOutsideDetection';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';
import React, { useRef } from 'react';

const Sidebar = ({ isShowing, toogleSidebar, toggleTheme, theme }) => {
  const sidebarRef = useRef(null);
  useOutsideDetection(isShowing ? sidebarRef : null, toogleSidebar);

  return (
    <>
      {isShowing ? (
        <div className="fixed inset-0 z-40 overflow-y-auto">
          <div className="fixed inset-0 bg-neutral-900 bg-opacity-20 opacity-100"></div>
        </div>
      ) : null}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 w-full z-50 max-w-sm h-screen py-2 shadow-lg bg-white dark:bg-slate-900 divide-y-2 divide-gray-200 dark:divide-gray-700 ring-1 ring-gray-200 dark:ring-gray-700 ease-in-out duration-300 ${
          isShowing ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-5 text-slate-900 dark:text-slate-200 relative">
          <div className="text-2xl font-bold">NFTMarket</div>
          <div className="text-sm mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            praesentium officiis quo, laborum optio mollitia.
          </div>
          <div className="flex justify-between items-center mt-5">
            <div className="inline-flex justify-start items-center gap-3">
              <img
                src="/images/twitter.svg"
                className="rounded-full w-8 h-8 cursor-pointer"
                alt="twitter"
              />
              <img
                src="/images/telegram.svg"
                className="rounded-full w-8 h-8 cursor-pointer"
                alt="twitter"
              />
            </div>
            <div className="justify-end">
              <button
                className="dark:bg-slate-800 bg-slate-200 rounded-full p-3"
                onClick={toggleTheme}
              >
                {theme === 'light' ? (
                  <SunIcon className="w-6 h-6" />
                ) : (
                  <MoonIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
          <div
            className="absolute top-0 right-3 hover:dark:bg-slate-800 hover:bg-slate-200 p-1 rounded-full cursor-pointer"
            onClick={toogleSidebar}
          >
            <XMarkIcon className="w-6 h-6" />
          </div>
        </div>
        <ul className="flex flex-col space-y-1 text-slate-900 dark:text-slate-200 justify-center p-3 text-sm font-medium tracking-wide uppercase">
          <li className="hover:bg-slate-800 rounded-lg px-3 py-2 cursor-pointer">
            Discover
          </li>
          <li className="hover:bg-slate-800 rounded-lg px-3 py-2 cursor-pointer">
            Help Center
          </li>
        </ul>
        <div className="flex flex-row items-center justify-between text-slate-900 dark:text-slate-200 p-3 space-x-3">
          <button className="p-3 bg-sky-600 hover:bg-sky-700 rounded-full w-full text-slate-200">
            Create
          </button>
          <button className="p-3 hover:dark:bg-slate-800 hover:bg-slate-200 rounded-full w-full border dark:border-slate-800 border-slate-200">
            Connect Wallet
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
