import React, { FC } from 'react';

const BottomSheetBaseOverlay: FC<{
  isActiveOverLay: boolean;
  onClose: () => void;
}> = ({ isActiveOverLay, onClose }) => {
  return isActiveOverLay && <div className="w-full h-48" onClick={onClose} />;
};

export default BottomSheetBaseOverlay;
