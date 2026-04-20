export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const cardHover = {
  initial: { y: 0, boxShadow: '0px 0px 0px rgba(0,0,0,0)' },
  hover: { y: -8, boxShadow: '0px 12px 24px rgba(0,0,0,0.15)' },
};

export const resultReveal = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export const staggerContainer = {
  container: {
    staggerChildren: 0.1,
  },
};

export const slideInFromLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.3 },
};

export const slideInFromRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.3 },
};
