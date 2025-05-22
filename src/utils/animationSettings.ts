// filepath: c:\Users\89429\Desktop\senkronsoft\futuristic-landing\src\utils\animationSettings.ts

export const ANIMATION_CONFIG = {
  DEFAULT_TRANSITION: {
    type: 'spring',
    stiffness: 260,
    damping: 20,
    duration: 0.5
  },
  STAGGER_CHILDREN: 0.1,
  PAGE_TRANSITION: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 }
  },
  SLIDE_UP: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.6, 0.05, 0.01, 0.9] }
  },
  FADE_IN: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 }
  }
};

export const staggerContainer = (staggerChildren?: number, delayChildren?: number) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: staggerChildren || ANIMATION_CONFIG.STAGGER_CHILDREN,
      delayChildren: delayChildren || 0
    }
  }
});
