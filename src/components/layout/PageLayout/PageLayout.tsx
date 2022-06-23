import React, { FC, Fragment, useEffect, useRef } from 'react'
import Footer from './Footer'
import Header from './Header'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import { pageVars } from '@src/animations/page'
interface Props {
  children: React.ReactNode
  fullWidth?: boolean
  fixedHeight?: boolean
  disableTransition?: boolean
}

const headerHeight = 'h-16'
const headerNavPos = 'top-16'
const height = 16
const bodyMarginTop = 'mt-16'
const maxWidth = 'max-w-screen-2xl'

const CommonLayout: FC<{
  children: React.ReactNode
  headerTransparent?: boolean
  headerFixed?: boolean
}> = ({ children, headerTransparent = false, headerFixed = false }) => {
  return (
    <div id="page-layout">
      <Header
        headerHeight={headerHeight}
        headerNavPos={headerNavPos}
        fixed={headerFixed}
        transparent={headerTransparent}
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
        className={classNames(
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
