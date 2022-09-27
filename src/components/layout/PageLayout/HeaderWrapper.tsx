import { forwardRef, MutableRefObject, ReactNode, useState } from 'react';
import cx from 'classnames';
import { IconButton } from '@src/components/ui/atom';
import { VscBell, VscBellDot } from 'react-icons/vsc';
import { useRecoilValue } from 'recoil';
import { loginSelector } from '@src/atom/auth';

type Props = {
  className?: string;
  fixed?: boolean;
  transparent?: boolean;
  content: ReactNode;
};

const HeaderWrapper = (
  { className, fixed = false, transparent = false, content }: Props,
  ref: MutableRefObject<HTMLDivElement>
) => {
  const [show, setShow] = useState(false);
  const { notifications } = useRecoilValue(loginSelector);

  return (
    <header className="relative">
      <div
        ref={ref}
        className={cx(
          'z-20 w-full max-w-mobile-app h-gb-header top-0',
          'px-side-padding py-2',
          'flex justify-between items-center align-middle',
          'text-secondary-500 font-bold',
          'rounded-b-md',
          fixed ? 'fixed' : 'absolute',
          transparent ? 'bg-transparent' : 'bg-primary-500',
          className
        )}
      >
        {content}
        <span className="flex space-x-2 items-center">
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
    </header>
  );
};

export default forwardRef(HeaderWrapper);
