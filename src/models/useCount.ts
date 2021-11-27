import { useState, useCallback } from 'react';

export default function useCountModel() {
  const [count, setCount] = useState(0);

  const plus = useCallback(() => {
    setCount(count + 1);
  }, []);

  const minus = useCallback(() => {
    setCount(count - 1);
  }, []);

  return {
    count,
    plus,
    minus,
  };
}
