import React, { FC } from 'react';
import ImageWrapper from '../../atom/ImageWrapper';
import CardWrapper from '../../atom/Card/CardWrapper';

type NewMenuCardProps = {
  title: string;
  description: string;
  linkTo: string;
  image: string;
};

const NewMenuCard: FC<NewMenuCardProps> = ({ title, description, linkTo, image }) => {
  return (
    <CardWrapper linkTo={linkTo}>
      <div className="relative z-0 flex p-8 h-44 justify-between overflow-hidden">
        <div className="z-20 flex flex-col justify-between text-white w-full">
          <h2 className="text-md font-bold w-3/5">{title}</h2>
          <a className="text-xs text-white w-4/5">{description}</a>
        </div>
        <div className="z-10 absolute top-0 left-0 w-full h-full">
          <ImageWrapper
            bgFilter="bg-gradient-to-r from-green-700/90 via-transparent"
            src={image}
            alt="coffee"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </CardWrapper>
  );
};

export default NewMenuCard;
