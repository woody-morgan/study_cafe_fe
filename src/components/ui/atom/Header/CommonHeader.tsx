import React, { FunctionComponent } from 'react';
import { ThemeSwitch } from '@src/components/ui/atom';
import { envConfig } from '@src/core/config/envConfig.js';
import Link from 'next/link';
import cx from 'classnames';

interface Props {
  titleStyle?: string;
  title?: string;
  titleUpperCase?: boolean;
}

const CommonHeader: FunctionComponent<Props> = ({
  titleStyle = 'uppercase',
  title = envConfig.appTitle,
  titleUpperCase,
}) => {
  return (
    <div className="w-full flex justify-between items-center">
      <Link href="/">
        <a>
          <h2 className={cx('w-full', titleUpperCase ? 'uppercase' : 'capitalize', titleStyle)}>
            {title}
          </h2>
        </a>
      </Link>
      <span className="flex space-x-2 items-center">
        <ThemeSwitch />
        {/* {notifications && notifications.length > 0 ? (
          <VscBellDot size="24" />
        ) : (
          <VscBell size="24" />
        )} */}
        {/* <IconButton
          name="hamburger"
          animate={show ? 'open' : 'close'}
          size={24}
          onClick={() => setShow((prev) => !prev)}
        /> */}
      </span>
    </div>
  );
};

export default CommonHeader;
