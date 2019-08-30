import { useState, useEffect } from 'react';

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T>({} as T);
  const [loading, setLoading] = useState<boolean>(true);

  async function fetchUrl() {
    const response = await fetch(url, {
      method: 'get',
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      })
    });

    const result = await response.json();

    setData(result);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  return { data, loading };
}
