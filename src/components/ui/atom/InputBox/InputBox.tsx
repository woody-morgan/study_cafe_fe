import classNames from 'classnames';
import React, { FC, ChangeEventHandler, MouseEventHandler } from 'react';
import HorizontalLine from '../HorizontalLine';

interface InputBoxShape {
  type: 'id' | 'email' | 'password';
  name: string;
  value: string | number;
  label?: string;
  error?: boolean;
  placeholder?: string;
  readOnly?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLInputElement>;
}

const InputBox: FC<InputBoxShape> = ({ name, label, error = true, ...props }) => {
  return (
    <div>
      {label && (
        <label htmlFor={name} className="block m-0 p-0 font-bold">
          {label}
        </label>
      )}
      <input
        className={classNames(
          `w-full h-10 pl-0 pr-4 py-2 rounded-md`,
          'bg-transparent border-none outline-none shadow-none text-black text-base'
        )}
        name={name}
        {...props}
      />
      <HorizontalLine className={classNames(error && `border-red-500`)} />
    </div>
  );
};

export default InputBox;
