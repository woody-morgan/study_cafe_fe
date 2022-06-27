import React, { FC } from 'react'
import cx from 'classnames'

const CardWrapper: FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className }) => {
  return <div className={cx('bg-primary w-full rounded-2xl', className)}>{children}</div>
}

export default CardWrapper
