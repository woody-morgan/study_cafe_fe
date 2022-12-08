import React, { FunctionComponent } from 'react';
import { IconButton, ImageWrapper } from '@src/components/ui/atom';
import cx from 'classnames';
import { IMenu } from '@src/core/api/apiMenu';

interface Props {
  className?: string;
  menu: IMenu;
  onAddToCart: () => void;
}

const MenuSelectCard: FunctionComponent<Props> = ({ className, menu, onAddToCart }) => {
  const { beverageName, price, mainImageUrl } = menu;
  return (
    <div className={cx('relative w-full', className)}>
      <div className="w-5/6 h-20 flex">
        <div className="relative w-20 h-full flex-shrink-0">
          <ImageWrapper src={mainImageUrl} className="rounded-md" layout="fill" objectFit="cover" />
        </div>
        <div className="pl-3 flex flex-col justify-between">
          <div>
            <div className="text-bold text-md">{beverageName}</div>
          </div>
          <div>
            <div className="text-bold text-md">{price}원</div>
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
