import React, { FC, Fragment, useEffect, useRef } from 'react'
import Footer from './Footer'
import Header from './Header'
import cx from 'classnames'
import { motion } from 'framer-motion'
import { pageVars } from '@src/animations/page'
import {
  headerHeight,
  height,
  bodyMarginTop,
  maxWidth,
  mobile_x_padding,
} from '@src/utils/constants'

type Props = {
  children: React.ReactNode
  fullWidth?: boolean
  fixedHeight?: boolean
  disableTransition?: boolean
}

const CommonLayout: FC<{
  children: React.ReactNode
  headerTransparent?: boolean
  headerFixed?: boolean
  bgColor?: string
}> = ({ children, headerTransparent = false, headerFixed = false, bgColor }) => {
  return (
    <div id="page-layout">
      <Header
        headerHeight={headerHeight}
        fixed={headerFixed}
        transparent={headerTransparent}
        className={cx(bgColor, mobile_x_padding)}
      />
      <Fragment>{children}</Fragment>
    </div>
  )
}

export const MemoizedCommonLayout = React.memo(CommonLayout)

export const PageLayout: FC<Props> = ({
  children,
  fullWidth = false,
  fixedHeight = false,
  disableTransition = false,
}) => {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (fixedHeight) {
      mainRef.current.style.setProperty('height', `${window.innerHeight - height * 4}px`)
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
          bodyMarginTop,
          fullWidth ? 'w-screen' : `${maxWidth}`,
          `${fixedHeight ? 'overflow-hidden' : 'min-h-screen'}`
        )}
      >
        {children}
      </motion.main>
      {!fixedHeight && (
        <Fragment>
          <Footer />
          {/* Insert more */}
        </Fragment>
      )}
    </Fragment>
  )
}
