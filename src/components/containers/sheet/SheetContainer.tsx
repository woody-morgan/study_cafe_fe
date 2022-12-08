import { Portal } from '@src/components/ui/atom';
import React, { FC } from 'react';
import { SheetType } from '@src/core/interface/bottom-sheet-type';
import MenuSelectBottomSheet from '@src/components/ui/organism/menupage/MenuSelectBottomSheet';
import { AnimatePresence } from 'framer-motion';

const _selectSheet: { [key in SheetType]: FC } = {
  MENUSELECT: MenuSelectBottomSheet,
};

const SheetContainer: FC = () => {
  // const SheetComponent = _selectSheet[name]

  return (
    <Portal selectorId="sheet">
      <AnimatePresence mode="wait">
        {/*{isOpen && (*/}
        {/*  <BottomSheetLayout isActiveOverLay={activeOverlay}>*/}
        {/*    {name && <SheetComponent />}*/}
        {/*  </BottomSheetLayout>*/}
        {/*)}*/}
      </AnimatePresence>
    </Portal>
  );
};

export default SheetContainer;
