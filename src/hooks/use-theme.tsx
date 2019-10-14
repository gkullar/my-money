import React, {
  createContext,
  useContext,
  useState,
  FunctionComponent
} from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { ThemeTypes, getTheme } from '../theme/theme';
import { themeKey } from '../config';

interface State {
  toggle: () => void;
  themeType: ThemeTypes;
}

function useThemeProvider(): State {
  const [themeType, setThemeType] = useState(
    localStorage.getItem(themeKey)
      ? (localStorage.getItem(themeKey) as ThemeTypes)
      : ThemeTypes.Light
  );

  const toggle = () => {
    const theme =
      themeType === ThemeTypes.Light ? ThemeTypes.Dark : ThemeTypes.Light;
    setThemeType(theme);
    localStorage.setItem(themeKey, theme);
  };

  return { toggle, themeType };
}

const ThemeContext = createContext<State>({} as any);

const ThemeProvider: FunctionComponent<{}> = ({ children }) => {
  const theme = useThemeProvider();
  const selectedTheme = getTheme(theme.themeType);

  return (
    <ThemeContext.Provider value={theme}>
      <SCThemeProvider theme={selectedTheme}>
        <>{children}</>
      </SCThemeProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
