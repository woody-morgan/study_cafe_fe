import React, { Children, FC, Fragment, useMemo } from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { defaultCarouselVars } from '@src/animations/carousel'
import cx from 'classnames'

const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

const Carousel: FC<{
  children: React.ReactNode
  selectedPage: number
  direction: number
  swipeConfidenceThreshold?: number
  draggable?: boolean
  removeArrow?: boolean
  animateVar?: Variants
  onPageChange: (idx: number, pageDir: number) => void
}> = ({
  children,
  selectedPage,
  direction,
  swipeConfidenceThreshold = 10000,
  removeArrow = false,
  animateVar = defaultCarouselVars,
  draggable = false,
  onPageChange,
}) => {
  const childArray = useMemo(() => Children.toArray(children), [children])

  const paginate = (newDirection: number) => {
    const nextPage = (selectedPage + newDirection) % childArray.length
    const nextPageIndex = nextPage < 0 ? childArray.length - 1 : nextPage
    onPageChange(nextPageIndex, newDirection)
  }

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
            opacity: { duration: 0.3 },
          }}
          {...(draggable && {
            drag: 'x',
            dragElastic: 0.5,
            dragConstraints: { left: 0, right: 0 },
            dragMomentum: false,
            onDragEnd: (event, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)
              console.log(velocity)
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            },
          })}
        >
          {childArray[selectedPage]}
        </motion.div>
      </AnimatePresence>
      <Fragment>
        <div
          className={cx(
            'absolute bg-white top-[calc(50%-20px)] right-3 w-10 h-10 justify-center items-center select-none cursor-pointer font-bold text-2xl z-[2] rounded-full dark:bg-gray-800 dark:text-white hidden md:flex',
            removeArrow ? 'md:hidden' : null
          )}
          onClick={() => paginate(1)}
        >
          {'‣'}
        </div>
        <div
          className={cx(
            'absolute bg-white top-[calc(50%-20px)] left-3 -scale-100 translate w-10 h-10 justify-center items-center select-none cursor-pointer font-bold text-2xl z-[2] rounded-full dark:bg-gray-800 dark:text-white hidden md:flex',
            removeArrow ? 'md:hidden' : null
          )}
          onClick={() => paginate(-1)}
        >
          {'‣'}
        </div>
      </Fragment>
    </div>
  )
}

export default Carousel
