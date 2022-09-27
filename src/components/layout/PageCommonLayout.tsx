import React, { FC, memo } from 'react';

const CommonLayout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    //  overflow hidden to prevent text on background on transition
    <div
      id="common-layout"
      className="overflow-hidden w-full max-w-mobile-app m-center bg-primary_bg-500 dark:bg-primary_bg-600"
    >
      {children}
    </div>
  );
};

export default memo(CommonLayout);
