import { forwardRef, MutableRefObject, useState } from 'react'
import cx from 'classnames'
import { IconButton } from '@src/components/common'
import { VscBell, VscBellDot } from 'react-icons/vsc'
import { headerHeight } from '@src/utils/constants'

type Props = {
  fixed?: boolean
  transparent?: boolean
  className?: string
}

const Header = (
  { fixed = false, transparent = false, className }: Props,
  ref: MutableRefObject<HTMLDivElement>
) => {
  const [show, setShow] = useState(false)
  const [notiExist, setNotiExist] = useState(false)

  return (
    <header>
      <div
        ref={ref}
        className={cx(
          `z-20 flex justify-between items-center align-middle w-full top-0 py-2 text-secondary font-bold`,
          headerHeight,
          fixed ? 'fixed' : 'absolute',
          transparent ? 'bg-transparent' : 'bg-primary',
          className
        )}
      >
        <span>Good day, John Smith</span>
        <span className="flex space-x-2">
          {notiExist ? <VscBellDot size="20" /> : <VscBell size="20" />}
          <IconButton
            name="hamburger"
            animate={show ? 'open' : 'close'}
            size={20}
            onClick={() => setShow((prev) => !prev)}
          />
        </span>
      </div>
      <div className={headerHeight} />
    </header>
  )
}

export default forwardRef(Header)
