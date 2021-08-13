const isBrowser = typeof window !== 'undefined';

export const getScrollPosition = () =>
  isBrowser ? document.body.getBoundingClientRect().top : 0;

export const getElementTopPosition = (element) =>
  isBrowser ? element.getBoundingClientRect().top : 0;

export const getElementHeight = (element) =>
  isBrowser ? element.getBoundingClientRect().height : 0;
