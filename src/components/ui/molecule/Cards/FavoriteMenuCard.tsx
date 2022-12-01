import React, { FunctionComponent } from 'react';
import { IconButton } from '../../atom';
import MenuPriceCard, { MenuPriceCardProps } from './MenuPriceCard';

interface Props extends MenuPriceCardProps {
  heartFilled: boolean;
  onHeartClick: () => void;
}

const FavoriteMenuCard: FunctionComponent<Props> = ({ heartFilled, onHeartClick, ...props }) => {
  return (
    <div className="relative">
      <MenuPriceCard {...props} />
      <div className="absolute bottom-2 right-2">
        {heartFilled ? (
          <div className="text-[#FB452D]">
            <IconButton name="heartFull" size={20} onClick={onHeartClick} />
          </div>
        ) : (
          <div className="text-white">
            <IconButton name="heartEmpty" size={20} onClick={onHeartClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoriteMenuCard;
