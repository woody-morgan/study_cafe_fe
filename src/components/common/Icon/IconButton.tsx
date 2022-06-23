import { motion, MotionProps } from 'framer-motion'
import React, { FC } from 'react'
import Icon, { SVGTypes } from './Icon'

interface IconButtonProps extends MotionProps {
  name: SVGTypes
  type?: 'button' | 'submit' | 'reset'
  width?: number
  height?: number
  onClick: () => void
}

const IconButton: FC<IconButtonProps> = ({ name, type = 'button', width, height, ...props }) => {
  return (
    <motion.button type={type} {...props}>
      <Icon name={name} width={width} height={height} />
    </motion.button>
  )
}

export default IconButton
