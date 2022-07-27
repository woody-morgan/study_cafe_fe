import { pageVars } from '@src/animations/page'
import { useBrowserBackward, useRootDispatch, useRootState } from '@src/hooks'
import useWindowResize from '@src/hooks/useWindowResize'
import { pageTransitionForward } from '@src/store/modules/layout'
import cx from 'classnames'
import { motion } from 'framer-motion'
import React, { FC, useEffect, useMemo, useRef } from 'react'

import Header from './PageLayout/Header'
import { envConfig } from '@src/core/config/envConfig.js'

const PageLayout: FC<{
  children: React.ReactNode
  fullWidth?: boolean
  fixedHeight?: boolean
  disableTransition?: boolean
  headerFixed?: boolean
  headerTransparent?: boolean
  headerBackgroundColor?: string
  headerContent?: React.ReactNode
}> = ({
  children,
  fullWidth = false,
  fixedHeight = false,
  disableTransition = false,
  headerFixed = false,
  headerTransparent = false,
  headerBackgroundColor,
  headerContent = <h2 className="uppercase w-full">{envConfig.appTitle}</h2>,
}) => {
  const mainRef = useRef<HTMLDivElement>(null)
  const dispatch = useRootDispatch()
  const layoutState = useRootState((state) => state.layout)

  useBrowserBackward()

  useEffect(() => {
    dispatch(pageTransitionForward())
  }, [])

  // to recalculate height when mobile browser search bar appeared and disappeared
  useWindowResize(() => {
    if (fixedHeight) {
      mainRef.current.style.setProperty('height', `${window.innerHeight}px`)
    } else {
      mainRef.current.style.setProperty('height', 'h-full')
    }
  }, 0)

  // pageDirection is used to determine the direction of the page transition
  const pageDirectionCustom = useMemo(
    () => (layoutState.pageTransitionDir === 'forward' ? 1 : -1),
    [layoutState.pageTransitionDir]
  )

  // do not remove pt-gb-header pb-bt-nav on motion.main
  // it is for showing content on the top of bottom nav
  // it should be pb-0 on desktop size because bottom nav will not be shown
  return (
    <motion.div
      className="relative"
      variants={disableTransition ? {} : pageVars}
      custom={pageDirectionCustom}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear' }}
    >
      <Header
        fixed={headerFixed}
        transparent={headerTransparent}
        className={headerBackgroundColor}
        content={headerContent}
      />
      <main
        ref={mainRef}
        className={cx(
          'relative m-center w-full pt-gb-header pb-bt-nav',
          fullWidth ? null : `max-w-mobile-app px-side-padding`,
          fixedHeight ? 'overflow-hidden h-screen' : 'min-h-screen'
        )}
      >
        {children}
      </main>
    </motion.div>
  )
}

export default PageLayout
