import { useEffect } from 'react';

export default function UseTimeout(callback: () => void, delay: number) {
  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
}
