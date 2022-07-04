import { forwardRef, MutableRefObject, useState } from 'react'
import cx from 'classnames'
import { IconButton, ThemeSwitch } from '@src/components/common'
import { VscBell, VscBellDot } from 'react-icons/vsc'
import { headerHeight } from '@src/utils/constants'
import { useRecoilState } from 'recoil'
import { authState } from '@src/atom/authAtom'
import { layoutState } from '@src/atom/layoutAtom'

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
  const [userAuth, setUserAuth] = useRecoilState(authState)
  const [userLayout, setUserLayout] = useRecoilState(layoutState)

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
        <span>{userLayout.title ?? 'Welcome to Study Cafe'}</span>
        <span className="flex space-x-2 items-center">
          <ThemeSwitch className="w-6 h-6" />
          {userAuth.userNotifications && userAuth.userNotifications.length > 0 ? (
            <VscBellDot size="24" />
          ) : (
            <VscBell size="24" />
          )}
          <IconButton
            name="hamburger"
            animate={show ? 'open' : 'close'}
            size={24}
            onClick={() => setShow((prev) => !prev)}
          />
        </span>
      </div>
      <div className={headerHeight} />
    </header>
  )
}

export default forwardRef(Header)
