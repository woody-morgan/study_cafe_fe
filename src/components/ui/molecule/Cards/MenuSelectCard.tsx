import React, { FunctionComponent } from 'react';
import { IconButton, ImageWrapper } from '@src/components/ui/atom';
import cx from 'classnames';
import { IMenuInfo } from '@src/core/interface/menu-info';

interface Props {
  className?: string;
  menuInfo: IMenuInfo;
  onAddToCart: () => void;
}

const MenuSelectCard: FunctionComponent<Props> = ({ className, menuInfo, onAddToCart }) => {
  const { name, description, price } = menuInfo;
  return (
    <div className={cx('relative w-full', className)}>
      <div className="w-5/6 h-28 flex">
        <div className="relative w-20 h-full flex-shrink-0">
          <ImageWrapper src="/static/coffee.png" layout="fill" />
        </div>
        <div className="pl-3 flex flex-col justify-between">
          <div>
            <div className="text-bold text-md">{name}</div>
            <div className="text-xs py-2">{description}</div>
          </div>
          <div>
            <div className="text-bold text-md">{price}</div>
          </div>
        </div>
      </div>
      <div className="absolute -translate-center-y">
        <div className="relative w-8 h-8 bg-primary-500 rounded-xl">
          <IconButton
            className="absolute text-white translate-center-xy"
            name="plus"
            size={28}
            onClick={onAddToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuSelectCard;
