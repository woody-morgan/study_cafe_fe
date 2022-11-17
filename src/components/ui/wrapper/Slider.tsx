import React, { Children, FC, useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';

/**
 * @param param divider: unique identifier for each child
 */
const Slider: FC<{
  children: React.ReactNode;
  divider: string;
  className?: string;
}> = ({ children, divider, className }) => {
  const childArray = Children.toArray(children);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      setWidth(slider.scrollWidth - slider.offsetWidth);
    }
  }, []);

  return (
    <div>
      <motion.div
        ref={sliderRef}
        className={cx('cursor-grab overflow-hidden', className)}
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex space-x-4"
        >
          {childArray.map((child, index) => {
            return (
              <div key={`image-slider-${divider}-${index}`} className="flex flex-shrink-0">
                {child}
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slider;
