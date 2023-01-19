import React, { useEffect, useState } from 'react';

const useTheme = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'dark';
    }
    return 'light';
  });

  const toogleSidebar = () => {
    setShowSidebar((current) => !current);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
    }
  }, [theme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return {
    isMounted,
    showSidebar,
    theme,
    toogleSidebar,
    toggleTheme,
  };
};

export default useTheme;
