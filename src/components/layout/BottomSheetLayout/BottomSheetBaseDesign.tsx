import React, { FC } from 'react'
import cx from 'classnames'

const BottomSheetBaseDesign: FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div
      className={cx(
        'bg-secondary-500 w-full h-full rounded-t-2xl border-x-2 border-t-2 border-primary-500 overflow-y-scroll overflow-x-hidden',
        'pb-bt-nav'
      )}
    >
      {children}
    </div>
  )
}

export default BottomSheetBaseDesign
