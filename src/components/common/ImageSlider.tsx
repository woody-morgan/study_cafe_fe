import React, { Children } from 'react'

const ImageSlider = ({ children, key }) => {
  const childArray = Children.toArray(children)

  return (
    <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll">
      {childArray.map((child, index) => {
        return <div key={`image-slider-${key}-${index}`}>{child}</div>
      })}
    </div>
  )
}

export default ImageSlider
