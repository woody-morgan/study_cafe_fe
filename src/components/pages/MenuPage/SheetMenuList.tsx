import React, { FC } from 'react'
import MenuItemAddSection from '@src/components/pages/MenuPage/MenuItemAddSection'
import { Carousel } from '@src/components/common'

//Todo Apply Api Call
const SheetMenuList: FC<{
  selectedPage: number
  direction: number
  onPageChange: (idx: number, pageDir) => void
}> = ({ ...props }) => {
  return (
    <Carousel {...props}>
      {Array(3)
        .fill(0)
        .map((_, idx) => {
          return (
            <div
              key={`sheet-item-container-${idx}`}
              className="flex flex-col flex-shrink-0 w-full px-8 py-4 space-y-4 overflow-y-scroll"
            >
              {Array(10)
                .fill(0)
                .map((_, idx) => {
                  return <MenuItemAddSection key={`sheet-item-${idx}`} />
                })}
            </div>
          )
        })}
    </Carousel>
  )
}

export default SheetMenuList
