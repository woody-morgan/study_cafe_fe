import React, { FC } from 'react';
import BottomSheetBaseLayout from './BottomSheetBaseLayout';
import BottomSheetBaseOverlay from './BottomSheetBaseOverlay';
import BottomSheetBaseDesign from './BottomSheetBaseDesign';

export type SheetBaseShape = {
  isActiveOverLay?: boolean;
  sheetPosition?: string;
  children?: React.ReactNode;
  onClose?: () => void;
};

const BottomSheetLayout: FC<SheetBaseShape> = ({
  isActiveOverLay = false,
  sheetPosition = 'top-24',
  children,
  onClose,
}) => {
  return (
    <BottomSheetBaseLayout isActiveOverLay={isActiveOverLay} sheetPosition={sheetPosition}>
      <BottomSheetBaseOverlay isActiveOverLay={isActiveOverLay} onClose={onClose} />
      <BottomSheetBaseDesign>{children}</BottomSheetBaseDesign>
    </BottomSheetBaseLayout>
  );
};

export default BottomSheetLayout;
