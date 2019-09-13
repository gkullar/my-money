import React, {
  createContext,
  useContext,
  useState,
  FunctionComponent
} from 'react';
import uuid from './uuid';

const accessTokenKey = `${process.env.REACT_APP_API_ACCESS_TOKEN_KEY}`;
const stateTokenKey = `${process.env.REACT_APP_API_STATE_TOKEN_KEY}`;
const clientId = `${process.env.REACT_APP_API_CLIENT_ID}`;
const clientSecret = `${process.env.REACT_APP_API_CLIENT_SECRET}`;
const redirectUri = 'http://localhost:3000'; // app not for production!

if (!localStorage.getItem(stateTokenKey))
  localStorage.setItem(stateTokenKey, uuid());

const stateToken = localStorage.getItem(stateTokenKey);

interface State {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const authContext = createContext<State>({} as any);

const useAuth = () => useContext(authContext);

const AuthProvider: FunctionComponent<{}> = ({ children }) => {
  const auth = useAuthProvider();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

function useAuthProvider(): State {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    localStorage.getItem(accessTokenKey) ? true : false
  );
  const params = new URLSearchParams(window.location.search);

  if (!isAuthenticated && params.has('code') && params.has('state')) {
    if (params.get('state') !== stateToken)
      throw new Error('Error: state token not matched'); // @todo handle error in UI

    authenticate(params.get('code') as string);
  }

  async function authenticate(code: string) {
    const data = new FormData();
    data.append('grant_type', 'authorization_code');
    data.append('client_id', clientId);
    data.append('client_secret', clientSecret);
    data.append('redirect_uri', redirectUri);
    data.append('code', code);

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/oauth2/token`,
      {
        method: 'post',
        body: data
      }
    );

    const result = await response.json();

    if (response.status !== 200 || result.error)
      throw new Error('Error: Failed Authentication'); // @todo handle error in UI

    localStorage.setItem(accessTokenKey, result.access_token);
    setIsAuthenticated(true);
    window.history.replaceState(null, document.title, window.location.pathname); // remove query params
  }

  function login() {
    window.location.href = `https://auth.monzo.com/?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&state=${stateToken}`;
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

    if (!result.ok) throw new Error('Error: Failed to logout'); // @todo handle error in UI

    localStorage.removeItem(accessTokenKey);
    setIsAuthenticated(false);
  }

  return { isAuthenticated, login, logout };
}

export { useAuth, AuthProvider };
