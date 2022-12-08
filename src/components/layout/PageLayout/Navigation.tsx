import { IconButton } from '@src/components/ui/atom';
import { navRouter } from '@src/core/config/navRouter';
import cx from 'classnames';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';

const Navigation: FunctionComponent<{
  cafeId: string;
  transparent?: boolean;
  className?: string;
}> = ({ cafeId, className, transparent = false }) => {
  return (
    <div className="relative">
      <div
        className={cx(
          'z-50 w-full max-w-mobile-app h-bt-nav bottom-0',
          'px-side-padding py-2',
          'flex justify-between items-center align-middle',
          'font-bold text-white',
          'fixed',
          'rounded-t-md',
          transparent ? 'bg-transparent' : 'bg-primary-500',
          className
        )}
      >
        {navRouter.map((info, index) => {
          return (
            <Link href={`/cafe/${cafeId}/${info.path}`} key={`bottom-sheet-${info.name}-index`}>
              <div
                key={`bottom-sheet-${index}`}
                className="flex flex-col justify-center items-center text-center h-full"
              >
                <IconButton name={info.icon} size={28} onClick={() => {}} />
                <div className="text-xs">{info.name}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
