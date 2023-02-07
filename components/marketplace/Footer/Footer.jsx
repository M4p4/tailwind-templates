import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className="border-t border-gray-300 dark:border-slate-800">
      <div className="py-20 container px-5 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
          <div className="grid grid-cols-4 gap-4 md:gap-0 col-span-2 md:col-span-4 lg:col-span-1 lg:flex lg:flex-col lg:space-y-3">
            <div className="font-bold text-2xl col-span-2 md:col-span-1 lg:col-span-1">
              NFTMARKET
            </div>

            <ul className="flex flex-row lg:flex-col space-x-3 lg:space-x-0 lg:space-y-3 col-span-3 md:col-span-2 text-sm">
              <li className="inline-flex items-center dark:hover:text-white hover:text-slate-900 cursor-pointer text-slate-700 dark:text-slate-200">
                <Image
                  className="w-5 h-5 mr-1"
                  src="/images/twitter.svg"
                  width={15}
                  height={15}
                  alt="twitter"
                />
                <span className="hidden lg:block">Twitter</span>
              </li>
              <li className="inline-flex items-center dark:hover:text-white hover:text-slate-900 cursor-pointer text-slate-700 dark:text-slate-200">
                <Image
                  className="w-5 h-5 mr-1"
                  src="/images/facebook.svg"
                  width={15}
                  height={15}
                  alt="facebook"
                />
                <span className="hidden lg:block">Facebook</span>
              </li>
              <li className="inline-flex items-center dark:hover:text-white hover:text-slate-900 cursor-pointer text-slate-700 dark:text-slate-200">
                <Image
                  className="w-5 h-5 mr-1"
                  src="/images/telegram.svg"
                  width={15}
                  height={15}
                  alt="telegram"
                />
                <span className="hidden lg:block">Telegram</span>
              </li>
              <li className="inline-flex items-center dark:hover:text-white hover:text-slate-900 cursor-pointer text-slate-700 dark:text-slate-200">
                <Image
                  className="w-5 h-5 mr-1"
                  src="/images/youtube.svg"
                  width={15}
                  height={15}
                  alt="youtube"
                />
                <span className="hidden lg:block">Youtube</span>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <h5 className="font-semibold mb-3">Getting Started</h5>
            <ul className="flex flex-col space-y-2">
              <li className="dark:hover:text-white hover:text-slate-900 cursor-pointer text-slate-700 dark:text-slate-200">
                Link #1
              </li>
              <li className="dark:hover:text-white hover:text-slate-900 cursor-pointer text-slate-700 dark:text-slate-200">
                Link #2
              </li>
              <li className="dark:hover:text-white hover:text-slate-900 cursor-pointer text-slate-700 dark:text-slate-200">
                Link #3
              </li>
              <li className="dark:hover:text-white hover:text-slate-900 cursor-pointer text-slate-700 dark:text-slate-200">
                Link #4
              </li>
              <li className="dark:hover:text-white hover:text-slate-900 cursor-pointer text-slate-700 dark:text-slate-200">
                Link #5
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <h5 className="font-semibold mb-3">Explore</h5>
            <ul className="flex flex-col space-y-2">
              <li className="dark:hover:text-white hover:text-slate-900 cursor-pointer text-slate-700 dark:text-slate-200">
                Link #1
              </li>
              <li className="dark:hover:text-white hover:text-slate-900 cursor-pointer text-slate-700 dark:text-slate-200">
                Link #2
              </li>
              <li className="dark:hover:text-white hover:text-slate-900 cursor-pointer text-slate-700 dark:text-slate-200">
                Link #3
              </li>
              <li className="dark:hover:text-white hover:text-slate-900 cursor-pointer text-slate-700 dark:text-slate-200">
                Link #4
              </li>
              <li className="dark:hover:text-white hover:text-slate-900 cursor-pointer text-slate-700 dark:text-slate-200">
                Link #5
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <h5 className="font-semibold mb-3">Resources</h5>
            <ul className="flex flex-col space-y-2">
              <li className="dark:hover:text-white hover:text-slate-900 cursor-pointer text-slate-700 dark:text-slate-200">
                Link #1
              </li>
              <li className="dark:hover:text-white hover:text-slate-900 cursor-pointer text-slate-700 dark:text-slate-200">
                Link #2
              </li>
              <li className="dark:hover:text-white hover:text-slate-900 cursor-pointer text-slate-700 dark:text-slate-200">
                Link #3
              </li>
              <li className="dark:hover:text-white hover:text-slate-900 cursor-pointer text-slate-700 dark:text-slate-200">
                Link #4
              </li>
              <li className="dark:hover:text-white hover:text-slate-900 cursor-pointer text-slate-700 dark:text-slate-200">
                Link #5
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <h5 className="font-semibold mb-3">Community</h5>
            <ul className="flex flex-col space-y-2">
              <li className="dark:hover:text-white hover:text-slate-900 cursor-pointer text-slate-700 dark:text-slate-200">
                Link #1
              </li>
              <li className="dark:hover:text-white hover:text-slate-900 cursor-pointer text-slate-700 dark:text-slate-200">
                Link #2
              </li>
              <li className="dark:hover:text-white hover:text-slate-900 cursor-pointer text-slate-700 dark:text-slate-200">
                Link #3
              </li>
              <li className="dark:hover:text-white hover:text-slate-900 cursor-pointer text-slate-700 dark:text-slate-200">
                Link #4
              </li>
              <li className="dark:hover:text-white hover:text-slate-900 cursor-pointer text-slate-700 dark:text-slate-200">
                Link #5
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
