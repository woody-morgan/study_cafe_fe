import { useState } from 'react';

export default function usePagination() {
  const [[page, pageDir], setPage] = useState([0, 0]);

  return [[page, pageDir], setPage] as const;
}
