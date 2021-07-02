const isBrowser = typeof window !== 'undefined';

export function getScrollPosition() {
  if (!isBrowser) return 0;

  const position = document.body.getBoundingClientRect();

  return Math.abs(position.top);
}

export function getElementBottomPosition(element) {
  if (!isBrowser) return 0;

  const position = element.getBoundingClientRect();

  return Math.abs(position.top);
}

export function getElementHeight(element) {
  if (!isBrowser) return 0;

  const position = element.getBoundingClientRect();

  return Math.abs(position.height);
}
