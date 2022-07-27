import React, { FC } from 'react'
import { sheetVariants } from '@src/animations/sheet'
import cx from 'classnames'
import { motion } from 'framer-motion'

const BottomSheetBaseLayout: FC<{
  children: React.ReactNode
  sheetPosition: string
  isActiveOverLay: boolean
}> = ({ children, sheetPosition, isActiveOverLay }) => {
  return (
    <motion.div
      variants={sheetVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className={cx(
        'fixed z-30 max-w-mobile-app mx-auto',
        isActiveOverLay ? 'inset-0' : `inset-x-0 ${sheetPosition} bottom-0`
      )}
    >
      {children}
    </motion.div>
  )
}

export default BottomSheetBaseLayout
