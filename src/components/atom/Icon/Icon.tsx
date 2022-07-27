import React, { FC, memo } from 'react'
import HamburgerSVG from './assets/Hamburger'
import LogoSVG from './assets/Logo'
import SettingSVG from './assets/Setting'
import CoffeeSVG from './assets/coffee.svg'
import HeartSVG from './assets/heart.svg'
import ReceiptSVG from './assets/receipt.svg'
import { BsHouseDoor, BsPlus } from 'react-icons/bs'

export type SVGTypes =
  | 'hamburger'
  | 'settings'
  | 'logo'
  | 'coffee'
  | 'heart'
  | 'home'
  | 'receipt'
  | 'plus'

type IconProps = {
  name: SVGTypes
  size?: number
  className?: string
}

const _Selector: { [key in SVGTypes]: FC<IconProps> } = {
  hamburger: HamburgerSVG,
  settings: SettingSVG,
  logo: LogoSVG,
  coffee: CoffeeSVG,
  heart: HeartSVG,
  home: BsHouseDoor,
  receipt: ReceiptSVG,
  plus: BsPlus,
}

const Icon: FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = _Selector[name]
  return <IconComponent className="pointer-events-none" name={name} {...props} />
}

export default memo(Icon)
