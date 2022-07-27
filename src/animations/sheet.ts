export const sheetVariants = {
  enter: {
    opacity: 0,
    y: 1000,
  },
  center: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    y: 1000,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
}
