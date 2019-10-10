import React, {
  createContext,
  useContext,
  useState,
  FunctionComponent,
  useEffect
} from 'react';
import uuid from '../utils/uuid';
import useTimeout from './use-timeout';
import { useSnackbar } from './use-snackbar';

const uri = `${process.env.REACT_APP_PUBLIC_URL}/oauth/callback`;
const accessTokenKey = `${process.env.REACT_APP_API_ACCESS_TOKEN_KEY}`;
const stateTokenKey = `${process.env.REACT_APP_API_STATE_TOKEN_KEY}`;
const clientId = `${process.env.REACT_APP_API_CLIENT_ID}`;
const clientSecret = `${process.env.REACT_APP_API_CLIENT_SECRET}`;

if (!localStorage.getItem(stateTokenKey))
  localStorage.setItem(stateTokenKey, uuid());

const stateToken = localStorage.getItem(stateTokenKey);

interface Error {
  message: string;
}

interface State {
  isAuthenticated: boolean;
  authenticate: () => void;
  login: () => void;
  logout: () => void;
  error: Error;
}

function useAuthProvider(): State {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    localStorage.getItem(accessTokenKey) ? true : false
  );
  const [error, setError] = useState<Error>({ message: '' });

  async function authenticate() {
    const params = new URLSearchParams(window.location.search);

    if (params.has('code') && params.has('state')) {
      if (params.get('state') !== stateToken) {
        const message = 'State Token verification failed';
        setError({ message });
        return;
      }

      const data = new FormData();
      data.append('grant_type', 'authorization_code');
      data.append('client_id', clientId);
      data.append('client_secret', clientSecret);
      data.append('redirect_uri', uri);
      data.append('code', params.get('code') as string);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/oauth2/token`,
        {
          method: 'post',
          body: data
        }
      );

      const result = await response.json();

      if (response.status !== 200 || result.error) {
        const message = result.error ? result.message : 'Failed Authentication';
        setError({ message });
        return;
      }

      localStorage.setItem(accessTokenKey, result.access_token);
      setIsAuthenticated(true);
    }
  }

  function login() {
    window.location.href = `https://auth.monzo.com/?client_id=${clientId}&redirect_uri=${uri}&response_type=code&state=${stateToken}`;
  }

  async function logout() {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/oauth2/logout`,
      {
        method: 'post',
        headers: new Headers({
          Authorization: `Bearer ${localStorage.getItem(accessTokenKey)}`
        })
      }
    );

    const result = await response.json();

    if (!result.ok) {
      const message = 'Error Logging out';
      setError({ message });
      return;
    }

    localStorage.removeItem(accessTokenKey);
    setIsAuthenticated(false);
  }

  return { isAuthenticated, authenticate, login, logout, error };
}

const AuthContext = createContext<State>({} as any);

const AuthProvider: FunctionComponent<{}> = ({ children }) => {
  const auth = useAuthProvider();

  const snackbar = useSnackbar();

  useEffect(() => {
    if (auth.error.message.length) snackbar.open(auth.error.message);
  }, [auth.error]);

  useTimeout(() => snackbar.close(), 5000);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
