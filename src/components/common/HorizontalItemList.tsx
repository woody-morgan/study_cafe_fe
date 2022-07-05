import React, { FC, memo } from 'react'
import { motion } from 'framer-motion'
import cx from 'classnames'
import { HorizontalItemListVars } from '@src/animations/item-list'

const HorizontalItemList: FC<{
  items: string[]
  selectedItem: string
  onItemClick: (item: string) => void
}> = ({ items, selectedItem, onItemClick }) => {
  return (
    <div className="flex bg-secondary text-center rounded-xl border-2 overflow-hidden border-primary">
      {items.map((menu, idx) => {
        const isSelected = selectedItem === menu

        return (
          <motion.button
            key={`${menu}-select-${idx}`}
            layoutId={`menu-${menu}-${idx}`}
            className={'z-0 relative flex-1 basis-1/3 h-9 px-3 py-1 rounded-xl overflow-visible'}
            onClick={() => onItemClick(menu)}
          >
            {idx % 2 == 1 && (
              <span className="absolute top-1/2 left-0 translate-center-y border-x-2 border-primary w-full h-1/2" />
            )}
            <text
              className={cx(
                'z-20 absolute left-1/2 top-1/2 translate-center-xy text-primary ease-out duration-500',
                isSelected && 'text-white'
              )}
            >
              {menu}
            </text>
            {isSelected && (
              <motion.div
                layoutId="menu-selected"
                className="-z-1 absolute -inset-1 rounded-3xl bg-primary"
                variants={HorizontalItemListVars}
                animate="animate"
              />
            )}
          </motion.button>
        )
      })}
    </div>
  )
}

export default memo(HorizontalItemList)
