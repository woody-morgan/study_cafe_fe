import classNames from 'classnames'
import React, { FC } from 'react'

interface IHozLineProps {
  className?: string
  height?: number
  color?: string
  margin?: number
}

const HorizontalLine: FC<IHozLineProps> = ({ className }) => {
  return <hr className={classNames('bg-[#DDDDDD] h-[1px] m-0 border-0', className)} />
}

export default HorizontalLine
