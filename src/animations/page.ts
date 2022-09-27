import { Variants } from 'framer-motion';

export const pageVars: Variants = {
  hidden: (direction: number) => {
    return {
      x: direction > 0 ? 1200 : -1200,
      y: 0,
      opacity: 0,
      transition: { duration: 0.1 },
    };
  },
  enter: { opacity: 1, x: 0, y: 0, transition: { duration: 0.2 } },
  exit: (direction: number) => {
    return {
      x: direction > 0 ? -1200 : 1200,
      y: 0,
      opacity: 0,
      transition: { duration: 0.4 },
    };
  },
};
