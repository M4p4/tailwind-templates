import React from 'react';
import Navbar from '../Navbar/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-200 z-10">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
