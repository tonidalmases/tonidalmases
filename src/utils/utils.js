const isBrowser = typeof window !== 'undefined';

export const getScrollPosition = () =>
  isBrowser ? Math.abs(document.body.getBoundingClientRect().top) : 0;

export const getElementTopPosition = (element) =>
  isBrowser ? Math.abs(element.getBoundingClientRect().top) : 0;

export const getElementHeight = (element) =>
  isBrowser ? Math.abs(element.getBoundingClientRect().height) : 0;
