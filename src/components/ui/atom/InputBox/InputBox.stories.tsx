import React, { useCallback, useState } from 'react';
import { ComponentMeta } from '@storybook/react';

import InputBox from './InputBox';
import { btnStyles } from '@src/utils/constants';

export default {
  title: 'Components/InputBox',
  component: InputBox,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof InputBox>;

const Template = ({ title, styles }: { title: string; styles: btnStyles }) => {
  return <div></div>;
};

export const Chunk = () => {
  const [Inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handleOnChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <InputBox
        type="password"
        name="password"
        label="Password"
        placeholder="패스워드"
        value={Inputs.password}
        onChange={handleOnChange}
      />
    </div>
  );
};
