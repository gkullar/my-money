import { useState, useEffect } from 'react';
import { accessTokenKey } from '../config';

interface State<T> {
  data: T;
  loading: boolean;
  error: boolean;
}

const useFetch = <T>(url: string): State<T> => {
  const [data, setData] = useState<T>({} as T);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    let subscribed = true;

    async function fetchUrl() {
      const response = await fetch(url, {
        method: 'get',
        headers: new Headers({
          Authorization: `Bearer ${localStorage.getItem(accessTokenKey)}`
        })
      });

      if (response.status === 401) {
        localStorage.removeItem(accessTokenKey);
        window.location.href = '/';
      } else if (response.status === 403) {
        window.location.href = '/permissions';
      } else if (response.status !== 200) {
        setLoading(false);
        setError(true);
      } else {
        const result = await response.json();
        setData(result);
        setLoading(false);
        setError(false);
      }
    }

    if (subscribed && url) fetchUrl();

    return () => {
      subscribed = false;
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
