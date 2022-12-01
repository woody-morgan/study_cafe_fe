import { IconButton } from '@src/components/ui/atom';
import cx from 'classnames';
import React, { FunctionComponent } from 'react';
import { gameControllerItems } from '@src/core/config/gameControllerItems';

const GameController: FunctionComponent<{
  transparent?: boolean;
  className?: string;
}> = ({ className, transparent = false }) => {
  return (
    <div className="relative">
      <div
        className={cx(
          'z-50 w-full h-bt-nav bottom-0',
          'px-side-padding py-2',
          'flex justify-between items-center align-middle',
          'font-bold text-white',
          'fixed',
          'rounded-t-md',
          transparent ? 'bg-transparent' : 'bg-primary-500',
          className
        )}
      >
        {gameControllerItems.map((item, index) => {
          return (
            <div
              key={`bottom-sheet-${index}`}
              className="flex flex-col justify-center items-center text-center h-full"
            >
              <IconButton name={item.icon} size={28} onClick={() => {}} />
              <div className="text-xs">{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameController;
