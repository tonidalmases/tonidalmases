import { useLayoutEffect, useState } from 'react';

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState([0, 0]);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export function useWindowSizeCallback(effect) {
  useLayoutEffect(() => {
    const handleResize = () => {
      effect([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
}
