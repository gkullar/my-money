import React, {
  createContext,
  useContext,
  useState,
  FunctionComponent
} from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { themes, ThemeTypes } from '../theme/theme';

interface State {
  toggle: () => void;
  themeType: ThemeTypes;
}

function useThemeProvider(): State {
  const [themeType, setThemeType] = useState(ThemeTypes.Light);

  const toggle = () => {
    const theme =
      themeType === ThemeTypes.Light ? ThemeTypes.Dark : ThemeTypes.Light;
    setThemeType(theme);
  };

  return { toggle, themeType };
}

const ThemeContext = createContext<State>({} as any);

const ThemeProvider: FunctionComponent<{}> = ({ children }) => {
  const theme = useThemeProvider();
  const selectedTheme =
    theme.themeType === ThemeTypes.Light ? themes.light : themes.dark;

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
