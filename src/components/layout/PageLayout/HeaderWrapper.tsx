import cx from 'classnames';
import React, { forwardRef, ForwardRefRenderFunction } from 'react';

type HeaderProps = {
  className?: string;
  fixed?: boolean;
  transparent?: boolean;
  children?: React.ReactNode;
};

const HeaderWrapper: ForwardRefRenderFunction<HTMLDivElement, HeaderProps> = (
  { fixed = false, transparent = false, children },
  ref
) => {
  return (
    <header className="relative">
      <div
        ref={ref}
        className={cx(
          'z-20 w-full max-w-mobile-app h-gb-header top-0',
          'px-side-padding py-2',
          'flex justify-between items-center align-middle',
          'font-bold',
          fixed ? 'fixed' : 'absolute',
          transparent
            ? 'bg-transparent text-primary-500 dark:text-white'
            : 'bg-primary-500 text-white dark:text-white'
        )}
      >
        {children}
      </div>
    </header>
  );
};

export default forwardRef(HeaderWrapper);
