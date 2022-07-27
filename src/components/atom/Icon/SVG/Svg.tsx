import React, { FC } from 'react'
import { motion, SVGMotionProps } from 'framer-motion'

const Svg: FC<
  {
    className?: string
    children: React.ReactNode
    viewBox: string
    fill?: string
    size?: number
  } & JSX.IntrinsicAttributes &
    SVGMotionProps<SVGSVGElement> &
    React.RefAttributes<SVGSVGElement>
> = ({ children, size = 28, ...props }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    width={size}
    height={size}
    {...props}
  >
    {children}
  </motion.svg>
)

export default Svg
