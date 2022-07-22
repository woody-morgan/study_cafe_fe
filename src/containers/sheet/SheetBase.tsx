import React, { FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { sheetVariants } from '@src/animations/sheet'
import cx from 'classnames'

type SheetBaseShape = {
  show: boolean
  isActiveOverLay?: boolean
  children?: React.ReactNode
  onClose?: () => void
}

const SheetBase: FC<SheetBaseShape> = ({ show, isActiveOverLay = false, children, onClose }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {show ? (
        <motion.div
          variants={sheetVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className={cx(
            'fixed z-30 max-w-mobile-app mx-auto',
            isActiveOverLay ? 'inset-0' : 'inset-x-0 top-48 bottom-0'
          )}
        >
          {/* create overlay when isActiveOverlay is active */}
          {isActiveOverLay && <div className="w-full h-48" onClick={onClose} />}
          <div
            className={cx(
              'bg-secondary-500 w-full h-full rounded-t-2xl border-x-2 border-t-2 border-primary-500 overflow-y-scroll overflow-x-hidden',
              'pb-bt-nav'
            )}
          >
            {children}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default SheetBase
