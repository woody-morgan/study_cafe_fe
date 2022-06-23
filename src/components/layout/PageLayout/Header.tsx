import { forwardRef, MutableRefObject } from 'react'
import Router from 'next/router'
import classnames from 'classnames'

type Props = {
  fixed?: boolean
  transparent?: boolean
  headerHeight: string
  headerNavPos: string
}

const Header = (
  { fixed = false, transparent = false, headerHeight, headerNavPos }: Props,
  ref: MutableRefObject<HTMLDivElement>
) => {
  return (
    <header
      ref={ref}
      className={classnames(
        `z-[999] flex justify-between items-center align-middle w-full top-0 px-3 py-2 bg-white dark:bg-gray-900`,
        fixed ? 'fixed' : 'absolute',
        transparent ? 'transparent' : 'bg-gray-300 dark:bg-gray-700',
        headerHeight
      )}
    ></header>
  )
}

export default forwardRef(Header)
