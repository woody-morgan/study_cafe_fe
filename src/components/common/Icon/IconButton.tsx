import { motion, MotionProps } from 'framer-motion'
import React, { FC } from 'react'
import Icon, { SVGTypes } from './Icon'

interface IconButtonProps extends MotionProps {
  className?: string
  name: SVGTypes
  type?: 'button' | 'submit' | 'reset'
  size?: number
  onClick: () => void
}

const IconButton: FC<IconButtonProps> = ({ type = 'button', onClick, ...props }) => {
  return (
    <motion.button type={type} onClick={onClick}>
      <Icon {...props} />
    </motion.button>
  )
}

export default IconButton
