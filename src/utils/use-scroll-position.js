import { useRef, useLayoutEffect } from 'react';
import { getScrollPosition } from './utils';

export default function useScrollPosition(effect, wait) {
  let throttleTimeout = useRef(null);

  const callBack = () => {
    effect(getScrollPosition());
    throttleTimeout.current = null;
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout.current === null) {
          throttleTimeout.current = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });
}
