import { Variants } from 'framer-motion'

export const defaultCarouselVars: Variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 500 : -500,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
    }
  },
}

export const defaultReverseCarouselVars: Variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? -1000 : 1000,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? -1000 : 1000,
    }
  },
}

export const CarouselVars: Variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.05,
      transition: {
        delay: 0,
      },
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.05,
      transition: {
        delay: 0,
      },
    }
  },
}

export const MultiCarouselVars: Variants = {
  enter: (idx: number) => {
    return {
      x: idx > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (idx: number) => {
    return {
      zIndex: 0,
      x: idx < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}
