import React, { Children, FC } from 'react'
import cx from 'classnames'

/**
 * @param param divider: unique identifier for each child
 */
const Slider: FC<{
  children: React.ReactNode
  divider: string
  className?: string
}> = ({ children, divider, className }) => {
  const childArray = Children.toArray(children)

  return (
    <div className={cx('flex overflow-y-hidden overflow-x-scroll', className)}>
      {childArray.map((child, index) => {
        return (
          <div key={`image-slider-${divider}-${index}`} className="flex flex-shrink-0">
            {child}
          </div>
        )
      })}
    </div>
  )
}

export default Slider
