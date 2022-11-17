import React, { FC } from 'react';
import BottomSheetBaseLayout from './BottomSheetBaseLayout';
import BottomSheetBaseOverlay from './BottomSheetBaseOverlay';
import BottomSheetBaseDesign from './BottomSheetBaseDesign';

export type SheetBaseShape = {
  open: boolean;
  isActiveOverLay?: boolean;
  translateTo?: string;
  children?: React.ReactNode;
  onClose?: () => void;
};

const BottomSheetLayout: FC<SheetBaseShape> = ({
  open,
  isActiveOverLay = false,
  translateTo,
  children,
  onClose,
}) => {
  return (
    <BottomSheetBaseLayout open={open} translateTo={translateTo}>
      <BottomSheetBaseOverlay isActiveOverLay={isActiveOverLay} onClose={onClose} />
      <BottomSheetBaseDesign>{children}</BottomSheetBaseDesign>
    </BottomSheetBaseLayout>
  );
};

export default BottomSheetLayout;
