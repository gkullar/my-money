import React, {
  createContext,
  useContext,
  useState,
  FunctionComponent
} from 'react';
import uuid from './uuid';

const uri = `${process.env.REACT_APP_PUBLIC_URL}/oauth/callback`;
const accessTokenKey = `${process.env.REACT_APP_API_ACCESS_TOKEN_KEY}`;
const stateTokenKey = `${process.env.REACT_APP_API_STATE_TOKEN_KEY}`;
const clientId = `${process.env.REACT_APP_API_CLIENT_ID}`;
const clientSecret = `${process.env.REACT_APP_API_CLIENT_SECRET}`;

if (!localStorage.getItem(stateTokenKey))
  localStorage.setItem(stateTokenKey, uuid());

const stateToken = localStorage.getItem(stateTokenKey);

interface State {
  isAuthenticated: boolean;
  authenticate: (code: string) => void;
  login: () => void;
  logout: () => void;
}

function useAuthProvider(): State {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    localStorage.getItem(accessTokenKey) ? true : false
  );

  async function authenticate(code: string) {
    const data = new FormData();
    data.append('grant_type', 'authorization_code');
    data.append('client_id', clientId);
    data.append('client_secret', clientSecret);
    data.append('redirect_uri', uri);
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

    if (!result.ok) throw new Error('Error: Failed to logout'); // @todo handle error in UI

    localStorage.removeItem(accessTokenKey);
    setIsAuthenticated(false);
  }

  return { isAuthenticated, authenticate, login, logout };
}

const AuthContext = createContext<State>({} as any);

const AuthProvider: FunctionComponent<{}> = ({ children }) => {
  const auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
