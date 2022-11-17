import React, { FC, memo } from 'react';
import cx from 'classnames';

const SearchBar: FC<{
  placeholder?: string;
  value: string;
  className?: string;
  onChange: (e) => void;
}> = ({ placeholder = 'Search..', value, className, onChange }) => {
  return (
    <div
      className={cx('border-2 border-primary-500 rounded-xl px-2 py-1 bg-secondary-500', className)}
    >
      <input
        className="w-full bg-transparent text-primary-500 text-base outline-0"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default memo(SearchBar);
