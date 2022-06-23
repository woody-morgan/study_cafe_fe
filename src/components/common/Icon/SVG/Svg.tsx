import React, { FC } from 'react'
import { motion, SVGMotionProps } from 'framer-motion'

const Svg: FC<{
  className?: string
  children: React.ReactNode
  viewBox: string
  fill?: string
  width?: number
  height?: number
}> = ({
  children,
  width = 28,
  height = 28,
  ...props
}: JSX.IntrinsicAttributes &
  SVGMotionProps<SVGSVGElement> &
  React.RefAttributes<SVGSVGElement>) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    width={width}
    height={height}
    {...props}
  >
    {children}
  </motion.svg>
)

export default Svg
