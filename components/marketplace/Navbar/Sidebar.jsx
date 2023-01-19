import useOutsideDetection from '@/components/hooks/useOutsideDetection';
import React, { useEffect, useRef } from 'react';

const Sidebar = ({ isShowing, toogleSidebar }) => {
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
        className={`fixed top-0 left-0 w-full z-50 max-w-sm h-screen py-2 shadow-lg bg-white dark:bg-slate-900 divide-y-2 divide-slate-100 dark:divide-slate-800 ring-1 ring-gray-200 dark:ring-gray-700 ease-in-out duration-300 ${
          isShowing ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-5 text-white">
          <h1>I am a Sidebar</h1>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
