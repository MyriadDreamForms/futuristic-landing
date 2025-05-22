import { useState, useEffect } from 'react';
import { useInView as useInViewFromLib } from 'react-intersection-observer';

interface IntersectionOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
  triggerOnce?: boolean;
  delay?: number;
  onChange?: (inView: boolean, entry: IntersectionObserverEntry) => void;
}

// Eski custom hook fonksiyonumuzu dışa aktaralım
export const useInViewLegacy = (
  elementRef: React.RefObject<Element>,
  options: IntersectionOptions = {}
): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  const { threshold = 0, root = null, rootMargin = '0px', freezeOnceVisible = false } = options;

  useEffect(() => {
    const element = elementRef?.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;

        // Öğe görünür hale geldiğinde ve dondurma seçeneği etkinse
        // durumu güncellemeden çık
        if (freezeOnceVisible && isIntersecting) return;
        
        setIntersecting(isElementIntersecting);
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [elementRef, threshold, root, rootMargin, freezeOnceVisible, isIntersecting]);

  return isIntersecting;
};

// Yeni, daha gelişmiş useInView hook'u
export const useInView = (options: IntersectionOptions = {}) => {
  const {
    threshold = 0, 
    rootMargin = '0px', 
    triggerOnce = false,
    delay = 0,
    onChange
  } = options;

  const [ref, inView, entry] = useInViewFromLib({
    threshold,
    rootMargin,
    triggerOnce,
    delay,
    onChange
  });

  return { ref, inView, entry };
};
