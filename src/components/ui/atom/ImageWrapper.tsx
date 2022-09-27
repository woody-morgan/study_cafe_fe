import classNames from 'classnames';
import NextImage, { ImageProps } from 'next/image';
import { Fragment } from 'react';

type CustomImageProps = {
  bgFilter?: string;
};

/**
 * @param {string} bgFilter - pass bgFilter to add filter to image(parent should be relative)
 * @example 'bg-gradient-to-r from-gray-500/10 to-gray-500/50'
 */
const Image = ({ bgFilter, ...rest }: ImageProps & CustomImageProps) => (
  <Fragment>
    <div
      className={bgFilter ? classNames('absolute top-0 left-0 w-full h-full z-10', bgFilter) : ''}
    />
    <NextImage {...rest} />
  </Fragment>
);

export default Image;
