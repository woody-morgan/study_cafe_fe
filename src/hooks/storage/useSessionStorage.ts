import { useState } from 'react';

export default function useSessionStorage<T>({
  key,
  initialValue,
}: {
  key: string;
  initialValue: T;
}) {
  const [storedValue, _setStoredValue] = useState<T>(() => {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setStoredValue = (value: T) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      _setStoredValue(valueToStore);
      window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setStoredValue] as const;
}
