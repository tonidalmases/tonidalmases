import { useLayoutEffect } from 'react';
import { getScrollPosition } from './utils';

export default function useScrollPosition(callback) {
  useLayoutEffect(() => {
    const handleScroll = () => {
      callback(getScrollPosition());
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
