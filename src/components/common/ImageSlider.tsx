import React, { Children, FC } from 'react'

/**
 * @param param divider: unique identifier for each child
 */
const ImageSlider: FC<{
  children: React.ReactNode
  divider: string
}> = ({ children, divider }) => {
  const childArray = Children.toArray(children)

  return (
    <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll">
      {childArray.map((child, index) => {
        return <div key={`image-slider-${divider}-${index}`}>{child}</div>
      })}
    </div>
  )
}

export default ImageSlider
