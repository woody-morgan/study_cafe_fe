import { Portal } from '@src/components/common'
import { FC } from 'react'
import { sheetState } from '@src/atom/sheetAtom'
import { AnimatePresence, motion } from 'framer-motion'
import { useRecoilState } from 'recoil'
import cx from 'classnames'

const SheetContainer: FC = () => {
  const [{ isOpen, activeOverlay }, setAppSheetState] = useRecoilState(sheetState)

  return (
    <Portal selectorId="sheet">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            variants={SheetVars}
            initial="enter"
            animate="center"
            exit="exit"
            className={cx('fixed z-30', activeOverlay ? 'inset-0' : 'inset-x-0 top-48 bottom-0')}
          >
            {/* create overlay when activeOverlay is active */}
            {activeOverlay && (
              <div
                className="w-full h-48"
                onClick={() => setAppSheetState((prev) => ({ ...prev, isOpen: false }))}
              />
            )}
            <div className="bg-secondary w-full h-full rounded-t-2xl border-x-2 border-t-2 border-primary p-10">
              <div>abc</div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Portal>
  )
}

const SheetVars = {
  enter: {
    opacity: 0,
    y: 1000,
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

export default SheetContainer
