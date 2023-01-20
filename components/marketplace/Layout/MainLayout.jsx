import React from 'react';
import Navbar from '../Navbar/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200 z-10">
      <Navbar />
      <main className="container px-5 mt-5 lg:mt-20 mx-auto min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
