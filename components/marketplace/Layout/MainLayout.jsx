import React from 'react';
import Navbar from '../Navbar/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200">
      <Navbar />
      <main className="container px-4 min-h-screen">{children}</main>
    </div>
  );
};

export default MainLayout;
