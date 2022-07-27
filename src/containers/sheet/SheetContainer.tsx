import { Portal } from '@src/components/atom'
import React, { FC } from 'react'
import { useRootDispatch, useRootState } from '@src/hooks'
import { SheetType } from '@src/core/types/bottom-sheet-type'
import MenuSelectBottomSheet from '@src/components/template/MenuSelectBottomSheet'
import { AnimatePresence } from 'framer-motion'
import { BottomSheetLayout } from '@src/components/layout'
import { closeBottomSheet } from '@src/store/modules/bottom-sheet'

const _selectSheet: { [key in SheetType]: FC } = {
  MENUSELECT: MenuSelectBottomSheet,
}

const SheetContainer: FC = () => {
  const dispatch = useRootDispatch()
  const { isOpen, name, activeOverlay } = useRootState((state) => state.bottomSheet)
  const SheetComponent = _selectSheet[name]

  return (
    <Portal selectorId="sheet">
      <AnimatePresence exitBeforeEnter>
        {isOpen && (
          <BottomSheetLayout
            isActiveOverLay={activeOverlay}
            onClose={() => dispatch(closeBottomSheet())}
          >
            {name && <SheetComponent />}
          </BottomSheetLayout>
        )}
      </AnimatePresence>
    </Portal>
  )
}

export default SheetContainer
