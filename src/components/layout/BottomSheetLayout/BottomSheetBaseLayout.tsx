import React, { FC } from 'react';
import cx from 'classnames';

const BottomSheetBaseLayout: FC<{
  children: React.ReactNode;
  sheetPosition: string;
  isActiveOverLay: boolean;
}> = ({ children, sheetPosition, isActiveOverLay }) => {
  return (
    <div
      className={cx(
        'fixed z-30 max-w-mobile-app mx-auto',
        isActiveOverLay ? 'inset-0' : `inset-x-0 ${sheetPosition} bottom-0`
      )}
    >
      {children}
    </div>
  );
};

export default BottomSheetBaseLayout;
