import React, { FC, Fragment, useEffect, useRef } from 'react'
import cx from 'classnames'
import { motion } from 'framer-motion'
import { pageVars } from '@src/animations/page'
import {
  bottomSheetHeightInt,
  headerHeightInt,
  maxWidth,
  mobileXPadding,
} from '@src/utils/constants'

import Header from './Header'
import BottomNavigation from './BottomNavigation'

// do not re-render when routing
const CommonLayout: FC<{
  children: React.ReactNode
  headerTransparent?: boolean
  headerFixed?: boolean
  bgColor?: string
}> = ({ children, headerTransparent = false, headerFixed = false, bgColor }) => {
  return (
    <div id="page-layout">
      <Header
        fixed={headerFixed}
        transparent={headerTransparent}
        className={cx(bgColor, mobileXPadding)}
      />
      <Fragment>{children}</Fragment>
      <BottomNavigation />
    </div>
  )
}

export const MemoizedCommonLayout = React.memo(CommonLayout)

export const PageLayout: FC<{
  children: React.ReactNode
  fullWidth?: boolean
  fixedHeight?: boolean
  disableTransition?: boolean
  enableYPadding?: boolean
}> = ({
  children,
  fullWidth = false,
  fixedHeight = false,
  disableTransition = false,
  enableYPadding = false,
}) => {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (fixedHeight) {
      mainRef.current.style.setProperty(
        'height',
        `${window.innerHeight - headerHeightInt - bottomSheetHeightInt}px`
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fixedHeight])

  return (
    <Fragment>
      <motion.main
        ref={mainRef}
        variants={disableTransition ? {} : pageVars}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'linear' }}
        className={cx(
          'z-0 flex flex-col mx-auto w-full',
          fullWidth && `${maxWidth}`,
          `${fixedHeight ? 'overflow-hidden' : 'min-h-screen'}`,
          enableYPadding ? 'py-4' : 'py-0'
        )}
      >
        {children}
      </motion.main>
      {!fixedHeight && (
        <Fragment>
          {/* <Footer /> */}
          {/* Insert more */}
        </Fragment>
      )}
    </Fragment>
  )
}
