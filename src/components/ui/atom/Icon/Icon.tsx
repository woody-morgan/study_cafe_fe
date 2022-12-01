import React, { FC, memo } from 'react';
import HamburgerSVG from './assets/Hamburger';
import LogoSVG from './assets/Logo';
import SettingSVG from './assets/Setting';
import CoffeeSVG from './assets/coffee.svg';
import ReceiptSVG from './assets/receipt.svg';
import { BsHouseDoor, BsPlus } from 'react-icons/bs';
import { BiDownArrow, BiLeftArrow, BiRightArrow, BiUpArrow } from 'react-icons/bi';
import { IoCafe } from 'react-icons/io5';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export type SVGTypes =
  | 'cafe'
  | 'leftArrow'
  | 'rightArrow'
  | 'upArrow'
  | 'downArrow'
  | 'hamburger'
  | 'settings'
  | 'logo'
  | 'coffee'
  | 'heartEmpty'
  | 'heartFull'
  | 'home'
  | 'receipt'
  | 'plus';

type IconProps = {
  name: SVGTypes;
  size?: number;
  className?: string;
};

const _Selector: { [key in SVGTypes]: FC<IconProps> } = {
  cafe: IoCafe,
  leftArrow: BiLeftArrow,
  rightArrow: BiRightArrow,
  upArrow: BiUpArrow,
  downArrow: BiDownArrow,
  hamburger: HamburgerSVG,
  settings: SettingSVG,
  logo: LogoSVG,
  coffee: CoffeeSVG,
  heartEmpty: AiOutlineHeart,
  heartFull: AiFillHeart,
  home: BsHouseDoor,
  receipt: ReceiptSVG,
  plus: BsPlus,
};

const Icon: FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = _Selector[name];
  return <IconComponent className="pointer-events-none" name={name} {...props} />;
};

export default memo(Icon);
