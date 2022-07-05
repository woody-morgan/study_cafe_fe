import React, { Children, FC, Fragment, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { wrap } from 'popmotion'
import { defaultCarouselVars } from '@src/animations/carousel'
import cx from 'classnames'

const swipeConfidenceThreshold = 5000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

const Carousel: FC<{
  children: React.ReactNode
  selectedIdx: number
  prevIdx: number
  removeArrow?: boolean
  animateVar?: Variants
  onPageChange?: (idx: number) => void
}> = ({
  children,
  selectedIdx,
  prevIdx,
  removeArrow = false,
  animateVar = defaultCarouselVars,
  onPageChange,
}) => {
  const [[page, direction], setPage] = useState([0, 0])
  const childArray = useMemo(() => Children.toArray(children), [children])
  const imageIndex = wrap(0, childArray.length, page)

  const paginate = (newDirection: number) => {
    const nextPage = (page + newDirection) % childArray.length
    setPage([nextPage, newDirection])
    onPageChange?.(nextPage)
  }

  useEffect(() => {
    setPage((prev) => [selectedIdx, selectedIdx - prevIdx > 0 ? 1 : -1])
  }, [selectedIdx])

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-scroll">
      <AnimatePresence initial={false} custom={direction} exitBeforeEnter>
        <motion.div
          key={page}
          className="absolute w-full h-full"
          custom={direction}
          variants={animateVar}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
        >
          {childArray[imageIndex]}
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
