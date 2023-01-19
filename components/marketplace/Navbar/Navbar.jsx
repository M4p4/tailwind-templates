import React from 'react';
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid';

import {
  BellIcon,
  Bars3Icon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
import Sidebar from './Sidebar';
import useTheme from '@/components/hooks/useTheme';

const Navbar = () => {
  const { toogleSidebar, isMounted, showSidebar, toggleTheme, theme } =
    useTheme();

  return (
    <>
      <Sidebar
        isShowing={showSidebar}
        toogleSidebar={toogleSidebar}
        toggleTheme={toggleTheme}
        theme={theme}
      />
      <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200 min-h-screen">
        <div className="container p-5 flex justify-between items-center space-x-4 xs:space-x-8 xl:space-x-12 mx-auto">
          <div className="flex justify-start flex-grow items-center space-x-3 lg:space-x-8">
            <div className="inline-block">
              <span className="font-bold text-xl">NFTMarket</span>
            </div>
            <div className="hidden sm:block flex-grow max-w-xs">
              <form method="POST" className="relative">
                <input
                  type="search"
                  placeholder="Search items"
                  className="block border w-full dark:border-gray-700 border-gray-200 dark:text-slate-200 placeholder:dark:text-gray-500 text-sm font-normal focus:outline-none h-[42px] bg-white dark:bg-slate-900 py-3 pr-10 pl-4 rounded-2xl"
                />
                <span className="absolute top-1/2 right-3 -translate-y-1/2 ">
                  <MagnifyingGlassIcon className="w-5 h-5 dark:fill-gray-500 fill-gray-500" />
                </span>
                <input type="submit" hidden />
              </form>
            </div>
          </div>
          <div className="flex justify-end items-center space-x-1 text-sm xl:text-base">
            <div className="flex xl:hidden items-center space-x-3">
              <button className="hover:dark:bg-slate-800 hover:bg-slate-200 rounded-full p-3 relative">
                <span className="absolute bg-blue-500 rounded-full top-2 right-2 h-2 w-2 "></span>
                <BellIcon className="w-6 h-6" />
              </button>
              <img
                className="rounded-full w-8 h-8 border dark:border-gray-700 border-gray-200"
                alt="avatar"
                src="/images/me.jpg"
              />
              <div className="p-2 cursor-pointer" onClick={toogleSidebar}>
                <Bars3Icon className="w-8 h-8" />
              </div>
            </div>
            <div className="hidden xl:flex items-center space-x-2">
              <div className="dark:bg-slate-800 bg-slate-200 py-2 px-4 rounded-full inline-flex items-center font-medium cursor-pointer">
                Discover <ChevronDownIcon className="w-3 h-3 ml-1" />
              </div>
              <div className="cursor-pointer hover:dark:bg-slate-800 font-normal rounded-full py-2 px-4">
                Help center
              </div>
              <div className="border-l border-gray-300 dark:border-gray-700 h-6"></div>
              <div className="flex">
                {isMounted ? (
                  <button
                    className="hover:dark:bg-slate-800 hover:bg-slate-200 rounded-full p-3"
                    onClick={toggleTheme}
                  >
                    {theme === 'light' ? (
                      <SunIcon className="w-6 h-6" />
                    ) : (
                      <MoonIcon className="w-6 h-6" />
                    )}
                  </button>
                ) : null}
                <button className="hover:dark:bg-slate-800 hover:bg-slate-200 rounded-full p-3 relative">
                  <span className="absolute bg-blue-500 rounded-full top-2 right-2 h-2 w-2 "></span>
                  <BellIcon className="w-6 h-6" />
                </button>
              </div>
              <div className="bg-sky-600 hover:bg-sky-700 text-slate-200 rounded-full py-2 px-4 font-medium cursor-pointer">
                Create
              </div>
              <div className="flex-shrink-0 inline-flex cursor-pointer">
                <img
                  className="rounded-full w-10 h-10 border dark:border-gray-700 border-gray-200"
                  alt="avatar"
                  src="/images/me.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
