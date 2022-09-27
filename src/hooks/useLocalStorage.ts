import { useState } from 'react';

export default function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, _setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setStoredValue = (value: T) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      _setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setStoredValue];
}
