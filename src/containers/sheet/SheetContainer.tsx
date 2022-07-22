import { Portal } from '@src/components/common'
import React, { FC } from 'react'
import { useRootDispatch, useRootState } from '@src/hooks'
import { closeBottomSheet } from '@src/store/modules/bottom-sheet'
import SheetBase from '@src/containers/sheet/SheetBase'
import { SheetType } from '@src/core/types/bottom-sheet-type'
import MenuSelectSheet from '@src/containers/sheet/content/MenuSelectSheet/MenuSelectSheet'

const _selectSheet: { [key in SheetType]: FC } = {
  MENUSELECT: MenuSelectSheet,
}

const SheetContainer: FC = () => {
  const dispatch = useRootDispatch()
  const { isOpen, name, activeOverlay } = useRootState((state) => state.bottomSheet)
  const SheetComponent = _selectSheet[name]

  return (
    <Portal selectorId="sheet">
      <SheetBase
        show={isOpen}
        isActiveOverLay={activeOverlay}
        onClose={() => dispatch(closeBottomSheet())}
      >
        {name && <SheetComponent />}
      </SheetBase>
    </Portal>
  )
}

export default SheetContainer
