import React, { FunctionComponent, memo } from 'react';
import { motion } from 'framer-motion';
import cx from 'classnames';
import { commonSize } from '@src/utils/constants';

const _selectSize: { [keys in commonSize]: string } = {
  large: 'text-lg',
  medium: 'text-base',
  small: 'text-sm',
  xsmall: 'text-xs',
};

const HorizontalItemList: FunctionComponent<{
  items: string[];
  textSize?: commonSize;
  selectedIdx: number;
  onItemClick: (idx: number) => void;
}> = ({ items, textSize = 'medium', selectedIdx, onItemClick }) => {
  return (
    <div className="flex bg-secondary-500 text-center rounded-xl border-2 overflow-hidden border-primary-500">
      {items.map((menu, idx) => {
        const isSelected = selectedIdx === idx;
        return (
          <motion.button
            key={`${menu}-select-${idx}`}
            layoutId={`menu-${menu}-${idx}`}
            className={'z-0 relative flex-1 basis-1/3 h-9 px-3 py-1 rounded-xl overflow-visible'}
            onClick={() => onItemClick(idx)}
          >
            <p
              className={cx(
                'z-20 absolute left-1/2 top-1/2 translate-center-xy ease-out duration-500',
                isSelected ? 'text-white' : 'text-primary-500',
                _selectSize[textSize]
              )}
            >
              {menu}
            </p>
            {isSelected && (
              <motion.div
                transition={{ duration: 0 }}
                layoutId="menu-selected"
                className="absolute inset-0 rounded-lg bg-primary-500"
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
};

export default memo(HorizontalItemList);
