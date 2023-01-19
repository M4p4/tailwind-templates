/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

const useOutsideDetection = (ref, cb) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    }
    if (ref) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [ref]);
};

export default useOutsideDetection;
