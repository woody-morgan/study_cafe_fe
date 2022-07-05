import React, { FC, memo } from 'react'
import { IconButton, ImageWrapper } from '@src/components/common'
import cx from 'classnames'

const MenuItemAddSection: FC<{
  className?: string
}> = ({ className }) => {
  return (
    <div className={cx('relative w-full', className)}>
      <div className="w-5/6 h-28 flex">
        <div className="relative w-20 h-full flex-shrink-0">
          <ImageWrapper src="/coffee.png" layout="fill" />
        </div>
        <div className="pl-3 flex flex-col justify-between">
          <div>
            <div className="text-bold text-md">Iced Americano</div>
            <div className="text-xs py-2">Double Espresso and water, served cold</div>
          </div>
          <div>
            <div className="text-bold text-md">$1.00</div>
          </div>
        </div>
      </div>
      <div className="absolute -translate-center-y">
        <div className="relative w-8 h-8 bg-primary rounded-xl">
          <IconButton
            className="absolute text-white translate-center-xy"
            name="plus"
            size={28}
            onClick={() => {
              alert('need to implement')
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default memo(MenuItemAddSection)
