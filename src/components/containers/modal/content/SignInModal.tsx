import React, { useCallback, useState } from 'react';
import { Button, InputBox } from '@src/components/ui/atom';

const SignInModal = () => {
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

  const handleSubmit = useCallback(() => {
    // do something
  }, []);

  return (
    <div className="space-y-6">
      <InputBox
        type="email"
        name="email"
        label="Email"
        placeholder="이메일"
        value={Inputs.email}
        onChange={handleOnChange}
      />
      <InputBox
        type="password"
        name="password"
        label="Password"
        placeholder="패스워드"
        value={Inputs.password}
        onChange={handleOnChange}
      />
      <Button fullWidth styles="primary" type="submit" onClick={handleSubmit}>
        Sign In
      </Button>
    </div>
  );
};

export default SignInModal;
