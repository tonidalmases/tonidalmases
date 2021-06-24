import { useLayoutEffect } from 'react';

const isBrowser = typeof window !== 'undefined';

function getScrollPosition() {
  if (!isBrowser) return { x: 0, y: 0 };

  const target = document.body;
  const position = target.getBoundingClientRect();

  return { x: Math.abs(position.left), y: Math.abs(position.top) };
}

export default function useScrollPosition(effect, wait) {
  let throttleTimeout = null;

  const callBack = () => {
    effect(getScrollPosition());
    throttleTimeout = null;
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });
}
