import React, { FC, memo, ReactNode } from 'react'
import cx from 'classnames'

const Section: FC<{
  title?: string
  children: ReactNode
  className?: string
}> = ({ title, children, className }) => {
  return (
    <div className={className}>
      {title && <h1 className={cx('text-primary-500 font-bold')}>{title}</h1>}
      <div>{children}</div>
    </div>
  )
}

export default memo(Section)
