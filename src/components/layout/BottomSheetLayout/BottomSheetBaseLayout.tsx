import React, { FC } from 'react';
import cx from 'classnames';

const BottomSheetBaseLayout: FC<{
  open: boolean;
  children: React.ReactNode;
  translateTo?: string;
}> = ({ translateTo, open, children }) => {
  return (
    <div
      className={cx(
        'fixed z-30 max-w-mobile-app mx-auto inset-0',
        'transition-all duration-300 ease-in-out',
        open ? translateTo ?? 'translate-y-0' : 'translate-y-full'
      )}
    >
      {children}
    </div>
  );
};

export default BottomSheetBaseLayout;
