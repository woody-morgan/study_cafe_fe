import Navigation from '@src/components/layout/PageLayout/Navigation';
import CommonHeader from '@src/components/ui/atom/Header/CommonHeader';
import useWindowResize from '@src/hooks/useWindowResize';
import cx from 'classnames';
import React, { FC, useRef } from 'react';

import HeaderWrapper from './PageLayout/HeaderWrapper';

const PageLayout: FC<{
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  fixedHeight?: boolean;
  headerFixed?: boolean;
  headerTransparent?: boolean;
  headerBackgroundColor?: string;
  headerContent?: React.ReactNode;
  overflowVisible?: boolean;
  showNavigation?: boolean;
}> = ({
  children,
  className,
  fullWidth = false,
  fixedHeight = false,
  headerFixed = false,
  headerTransparent = false,
  headerBackgroundColor,
  headerContent = <CommonHeader titleUpperCase />,
  overflowVisible = false,
  showNavigation = false,
}) => {
  const mainRef = useRef<HTMLDivElement>(null);

  useWindowResize(() => {
    if (fixedHeight) {
      mainRef.current.style.setProperty('height', `${window.innerHeight}px`);
      document.body.style.overflow = 'hidden';
    } else {
      mainRef.current.style.setProperty('height', 'h-full');
      document.body.style.overflow = 'auto';
    }
  }, 0);

  return (
    <div
      className={cx(
        'relative w-full max-w-mobile-app m-center',
        overflowVisible ? 'overflow-visible' : 'overflow-hidden'
      )}
    >
      <HeaderWrapper
        fixed={headerFixed}
        transparent={headerTransparent}
        className={headerBackgroundColor}
      >
        {headerContent}
      </HeaderWrapper>
      <main
        ref={mainRef}
        className={cx(
          className,
          'relative m-center w-full pt-gb-header',
          showNavigation ? 'pb-bt-nav' : 'pb-0',
          fullWidth ? null : `max-w-mobile-app px-side-padding`,
          fixedHeight ? 'overflow-hidden h-screen' : 'min-h-screen'
        )}
      >
        {children}
      </main>
      {showNavigation && <Navigation />}
    </div>
  );
};

export default PageLayout;
