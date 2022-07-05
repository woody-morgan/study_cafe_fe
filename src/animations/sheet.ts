export const sheetVariants = {
  enter: {
    opacity: 0,
    y: 400,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  center: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    y: 1000,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}
