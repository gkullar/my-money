import { useEffect } from 'react';

function useTimeout(callback: Function, delay: number) {
  useEffect(() => {
    let timeout = setTimeout(() => callback(), delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}

export default useTimeout;
