import { forwardRef, MutableRefObject, useState } from 'react'
import cx from 'classnames'
import { IconButton } from '@src/components/common'
import { VscBell, VscBellDot } from 'react-icons/vsc'

type Props = {
  fixed?: boolean
  transparent?: boolean
  headerHeight: string
  className?: string
}

const Header = (
  { fixed = false, transparent = false, headerHeight, className }: Props,
  ref: MutableRefObject<HTMLDivElement>
) => {
  const [show, setShow] = useState(false)
  const [notiExist, setNotiExist] = useState(false)

  return (
    <header
      ref={ref}
      className={cx(
        `z-20 flex justify-between items-center align-middle w-full top-0 py-2 text-primary font-bold`,
        fixed ? 'fixed' : 'absolute',
        transparent ? 'bg-transparent' : '',
        className,
        headerHeight
      )}
    >
      <span>Good day, John Smith</span>
      <span className="flex space-x-2">
        {notiExist ? <VscBellDot size="20" /> : <VscBell size="20" />}
        <IconButton
          name="hamburger"
          animate={show ? 'open' : 'close'}
          width={20}
          height={20}
          onClick={() => setShow((prev) => !prev)}
        />
      </span>
    </header>
  )
}

export default forwardRef(Header)
