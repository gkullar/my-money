import { useState, useEffect } from 'react';

const accessTokenKey = `${process.env.REACT_APP_API_ACCESS_TOKEN_KEY}`;

interface State<T> {
  data: T;
  loading: boolean;
  hasErrors: boolean;
  hasPermissions: boolean;
}

const useFetch = <T>(url: string): State<T> => {
  const [data, setData] = useState<T>({} as T);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasErrors, setHasErrors] = useState<boolean>(false);
  const [hasPermissions, setHasPermissions] = useState<boolean>(true);

  async function fetchUrl() {
    const response = await fetch(url, {
      method: 'get',
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem(accessTokenKey)}`
      })
    });

    const result = await response.json();

    if (response.status === 401) {
      localStorage.removeItem(accessTokenKey);
      window.location.href = '/';
    } else if (response.status === 403) {
      setHasPermissions(false);
    } else if (response.status !== 200) {
      throw new Error('Error: Failed Data Fetch'); // @todo handle error in UI
    } else {
      setData(result);
      setLoading(false);
      setHasErrors(false);
      setHasPermissions(true);
    }
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  return { data, loading, hasErrors, hasPermissions };
};

export default useFetch;
