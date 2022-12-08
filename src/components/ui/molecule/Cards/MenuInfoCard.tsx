import React, { FC } from 'react';
import ImageWrapper from '../../atom/ImageWrapper';
import CardWrapper from '../../atom/Card/CardWrapper';

interface MenuCardProps {
  title: string;
  description: string;
  linkTo: string;
  imageUrl: string;
}

const MenuInfoCard: FC<MenuCardProps> = ({ title, description, linkTo, imageUrl }) => {
  return (
    <CardWrapper linkTo={linkTo}>
      <div className="flex p-4 h-44 justify-between">
        <div className="flex flex-col w-3/5 justify-between text-white">
          <span className="text-sm">{title}</span>
          <h2 className="text-lg font-bold">{description}</h2>
          <span>구매하기</span>
        </div>
        <div className="relative w-24 h-full">
          <ImageWrapper
            className="rounded-md"
            src={imageUrl}
            alt="coffee"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </CardWrapper>
  );
};

export default MenuInfoCard;
