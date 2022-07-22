import { FC } from 'react'
import Path from '../SVG/Path'
import Svg from '../SVG/Svg'

const HamburgerSVG: FC<{
  className?: string
  size?: number
}> = ({ className, ...props }) => {
  return (
    <Svg viewBox={`0 0 20 20`} {...props} className={className}>
      <Path
        variants={{
          close: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          close: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          close: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </Svg>
  )
}

export default HamburgerSVG
