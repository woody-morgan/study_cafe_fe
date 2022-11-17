import { parseDate } from '@src/utils/dateUtil';
import React, { FunctionComponent } from 'react';
import { ImageWrapper } from '../../atom';
import CardWrapper from '../../atom/Card/CardWrapper';

interface Props {
  linkTo: string;
  image: string;
  menuName: string;
  orderDate: string;
}

const OrderInfoCard: FunctionComponent<Props> = ({ linkTo, image, menuName, orderDate }) => {
  return (
    <CardWrapper
      className="bg-secondary-400 border-[1px] border-solid border-secondary-800"
      linkTo={linkTo}
    >
      <div className="relative flex p-3 h-36">
        <div className="relative w-20 h-full mr-8">
          <ImageWrapper src={image} alt="coffee" layout="fill" />
        </div>
        <div className="flex flex-col w-3/5 justify-center">
          <h3>{menuName}</h3>
        </div>
        <div className="absolute top-1 right-4 text-xs">
          {parseDate({
            date: orderDate,
          })}
        </div>
      </div>
    </CardWrapper>
  );
};

export default OrderInfoCard;
