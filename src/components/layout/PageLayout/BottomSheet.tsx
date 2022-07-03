import { IconButton } from '@src/components/common'
import React, { FC, Fragment } from 'react'
import cx from 'classnames'
import { bottomSheetHeight } from '@src/utils/constants'
import { siteRouter } from 'data/siteRouter'

const BottomSheet: FC<{
  fixed?: boolean
}> = ({ fixed = true }) => {
  return (
    <Fragment>
      <div className={cx('z-10 fixed bottom-0 w-full bg-primary', fixed ? 'fixed' : 'relative')}>
        <div className={cx('w-full px-5 flex justify-between text-white', bottomSheetHeight)}>
          {siteRouter.map((info, index) => {
            return (
              <div
                key={`bottom-sheet-${index}`}
                className="flex flex-col justify-center items-center text-center h-full"
              >
                <IconButton name={info.icon} size={28} onClick={() => {}} />
                <div className="text-xs">{info.name}</div>
              </div>
            )
          })}
        </div>
      </div>
      {/* to give padding for bottom sheet */}
      {fixed && <div className={bottomSheetHeight} />}
    </Fragment>
  )
}

export default BottomSheet
