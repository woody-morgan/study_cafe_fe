import React, { FC, Fragment, memo } from 'react'
import cx from 'classnames'

import Navigation from './PageLayout/Navigation'

const PageCommonLayout: FC<{
  children: React.ReactNode
  headerTransparent?: boolean
  headerFixed?: boolean
}> = ({ children }) => {
  return (
    //  overflow hidden to prevent text on background on transition
    <div
      id="page-layout"
      className={cx(
        'w-full max-w-mobile-app',
        'overflow-hidden bg-primary_bg-500 dark:bg-primary_bg-600',
        'm-center'
      )}
    >
      <Fragment>{children}</Fragment>
      <Navigation />
    </div>
  )
}

export default memo(PageCommonLayout)
