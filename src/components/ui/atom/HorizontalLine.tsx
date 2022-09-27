import classNames from 'classnames';
import React, { FC } from 'react';

const HorizontalLine: FC<{
  className?: string;
}> = ({ className }) => {
  return <hr className={classNames('bg-[#DDDDDD] h-[1px] m-0 border-0', className)} />;
};

export default HorizontalLine;
