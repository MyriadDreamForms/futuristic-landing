import { useEffect } from 'react';

type ScrollDirection = 'up' | 'down';

interface ScrollOptions {
  threshold?: number;
  onScroll?: (direction: ScrollDirection, scrollY: number) => void;
}

export const useScrollEffect = (options: ScrollOptions = {}) => {
  const { threshold = 100, onScroll } = options;

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      
      if (Math.abs(scrollY - lastScrollY) > threshold) {
        if (onScroll) {
          onScroll(direction, scrollY);
        }
        lastScrollY = scrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold, onScroll]);
};
