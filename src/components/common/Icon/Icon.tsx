import React, { FC, useMemo } from 'react'
import HamburgerSVG from './assets/Hamburger'
import LogoSVG from './assets/Logo'
import SettingSVG from './assets/Setting'

export type SVGTypes = 'hamburger' | 'settings' | 'logo'

type IconProps = {
  name: SVGTypes
  className?: string
  width: number
  height: number
}

const Icon: FC<IconProps> = ({ name, ...props }) => {
  const IconWrapper = useMemo(() => {
    const _IconSelector: { [keys in SVGTypes]: JSX.Element } = {
      hamburger: <HamburgerSVG {...props} />,
      settings: <SettingSVG {...props} />,
      logo: <LogoSVG {...props} />,
    }

    return _IconSelector[name]
  }, [name, props])

  return <>{IconWrapper}</>
}

export default Icon
