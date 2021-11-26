import { useEffect, useState } from 'react';
import { keysOf } from 'utils/keysOf';

const sizes = {
  mobile: 480,
  tablet: 990,
  laptop: 1024,
  desktop: 1440,
} as const;

const minWidthQuery = (width: number) => `@media (min-width: ${width}px)`;

export const from = keysOf(sizes).reduce(
  (acc, key) => ({
    ...acc,
    [key]: minWidthQuery(sizes[key]),
  }),
  {} as { [key in keyof typeof sizes]: string },
);

export const useMediaQuery = (query: string): boolean => {
  const mediaQuery = query.replace('@media', '').trim();

  const [match, setMatch] = useState(
    () => window.matchMedia(mediaQuery).matches,
  );

  useEffect(() => {
    try {
      const mediaQueryList = window.matchMedia(mediaQuery);

      const handleChange = (event: MediaQueryListEvent) =>
        setMatch(event.matches);

      if (mediaQueryList.addEventListener != null) {
        mediaQueryList.addEventListener('change', handleChange);
        return () => mediaQueryList.removeEventListener('change', handleChange);
      }

      // legacy browsers
      if (mediaQueryList.addListener != null) {
        mediaQueryList.addListener(handleChange);
        return () => mediaQueryList.removeListener(handleChange);
      }
    } catch (e) {
      // fallback to desktop
      setMatch(true);
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, [mediaQuery]);

  return match;
};
