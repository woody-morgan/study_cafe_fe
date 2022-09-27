import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const useBrowserBackward = (callback: () => void) => {
  const router = useRouter();

  useEffect(() => {
    router.beforePopState(() => {
      callback();
      return true;
    });
    return () => {
      router.beforePopState(() => true);
    };
  }, []);
};

export default useBrowserBackward;
