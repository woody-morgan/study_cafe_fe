import React, { FC } from 'react'
import cx from 'classnames'
import Link from 'next/link'

// MaxWidth of the card is md
const CardWrapper: FC<{
  children: React.ReactNode
  className?: string
  linkTo?: string
}> = ({ children, linkTo, className }) => {
  return (
    <div className={cx('bg-primary w-full rounded-2xl overflow-hidden max-w-md', className)}>
      {linkTo ? <Link href={linkTo}>{children}</Link> : children}
    </div>
  )
}

export default CardWrapper
