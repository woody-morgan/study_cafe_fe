import { Portal } from '@src/components/common'
import { FC } from 'react'
import { sheetState } from '@src/atom/sheetAtom'
import { AnimatePresence, motion } from 'framer-motion'
import { useRecoilState } from 'recoil'
import cx from 'classnames'
import { sheetVariants } from '@src/animations/sheet'
import { bottomSheetPaddingBottom } from '@src/utils/constants'

const SheetContainer: FC = () => {
  const [{ isOpen, activeOverlay, children }, setAppSheetState] = useRecoilState(sheetState)

  return (
    <Portal selectorId="sheet">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            variants={sheetVariants}
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
            <div
              className={cx(
                'bg-secondary w-full h-full rounded-t-2xl border-x-2 border-t-2 border-primary overflow-y-scroll overflow-x-hidden',
                bottomSheetPaddingBottom
              )}
            >
              {/*<SheetMenuList />*/}
              {children}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Portal>
  )
}

export default SheetContainer
