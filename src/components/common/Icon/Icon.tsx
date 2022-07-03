import React, { FC, memo } from 'react'
import HamburgerSVG from './assets/Hamburger'
import LogoSVG from './assets/Logo'
import SettingSVG from './assets/Setting'
import CoffeeSVG from './assets/coffee.svg'
import HeartSVG from './assets/heart.svg'
import ReceiptSVG from './assets/receipt.svg'
import { BsHouseDoor } from 'react-icons/bs'

export type SVGTypes = 'hamburger' | 'settings' | 'logo' | 'coffee' | 'heart' | 'home' | 'receipt'

type IconProps = {
  name: SVGTypes
  size?: number
  className?: string
}

const Icon: FC<IconProps> = ({ name, ...props }) => {
  switch (name) {
    case 'hamburger':
      return <HamburgerSVG {...props} />
    case 'settings':
      return <SettingSVG {...props} />
    case 'logo':
      return <LogoSVG {...props} />
    case 'coffee':
      return <CoffeeSVG {...props} />
    case 'heart':
      return <HeartSVG {...props} />
    case 'home':
      return <BsHouseDoor {...props} />
    case 'receipt':
      return <ReceiptSVG {...props} />
  }
}

export default memo(Icon)
