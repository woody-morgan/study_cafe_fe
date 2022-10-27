import React, { Children, FunctionComponent, useMemo } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { defaultCarouselVars } from '@src/framer/carousel';

const Carousel: FunctionComponent<{
  children: React.ReactNode;
  selectedPage: number;
  direction: number;
  swipeConfidenceThreshold?: number;
  animateVar?: Variants;
  onPageChange: (idx: number, pageDir: number) => void;
}> = ({ children, selectedPage, direction, animateVar = defaultCarouselVars }) => {
  const childArray = useMemo(() => Children.toArray(children), [children]);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-scroll">
      <AnimatePresence initial={false} custom={direction} exitBeforeEnter>
        <motion.div
          key={selectedPage}
          className="absolute w-full h-full"
          custom={direction}
          variants={animateVar}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { stiffness: 200, damping: 20 },
            opacity: { duration: 0.5 },
          }}
        >
          {childArray[selectedPage]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
