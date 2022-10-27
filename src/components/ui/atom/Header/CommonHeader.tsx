import React, { useState } from 'react';
import { VscBell, VscBellDot } from 'react-icons/vsc';
import { IconButton, ThemeSwitch } from '@src/components/ui/atom';
import { useRecoilValue } from 'recoil';
import { loginSelector } from '@src/atom/auth';
import { envConfig } from '@src/core/config/envConfig.js';
import Link from 'next/link';

const CommonHeader = () => {
  const [show, setShow] = useState(false);
  const { notifications } = useRecoilValue(loginSelector);

  return (
    <div className="w-full flex justify-between">
      <Link href="/">
        <a>
          <h2 className="uppercase w-full">{envConfig.appTitle}</h2>
        </a>
      </Link>
      <span className="flex space-x-2 items-center">
        <ThemeSwitch />
        {notifications && notifications.length > 0 ? (
          <VscBellDot size="24" />
        ) : (
          <VscBell size="24" />
        )}
        <IconButton
          name="hamburger"
          animate={show ? 'open' : 'close'}
          size={24}
          onClick={() => setShow((prev) => !prev)}
        />
      </span>
    </div>
  );
};

export default CommonHeader;
