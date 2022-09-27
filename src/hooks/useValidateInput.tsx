import React from 'react';

export default function useValidateInput(
  initialState: unknown,
  pattern: RegExp,
  errorMessage: string
): [unknown, boolean, string, (e: React.ChangeEvent<HTMLInputElement>) => void] {
  const [myState, setMyState] = React.useState(initialState);
  const [error, setError] = React.useState('');
  const [isValid, setIsValid] = React.useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const isValid = pattern.test(value);
    setMyState(value);
    setIsValid(isValid);
    setError(isValid ? '' : errorMessage);
  };

  return [myState, isValid, error, handleInputChange];
}
