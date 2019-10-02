import { DefaultTheme } from 'styled-components';

export interface Palettes {
  base: DefaultTheme;
  accent: DefaultTheme;
}

export interface Themes {
  light: Palettes;
  dark: Palettes;
}

export enum PaletteTypes {
  Base = 'base',
  Accent = 'accent'
}

export enum ThemeTypes {
  Light = 'light',
  Dark = 'dark'
}

export function getTheme(themeType: ThemeTypes): Palettes {
  if (themeType === ThemeTypes.Dark) return themes.dark;

  return themes.light;
}

const themes: Themes = {
  light: {
    base: {
      text: '#1b1b1b',
      background: '#fff',
      borderColor: '#1b1b1b'
    },
    accent: {
      text: '#fff',
      background: '#37414f',
      borderColor: '#00dba3'
    }
  },
  dark: {
    base: {
      text: '#fff',
      background: '#2d1d29',
      borderColor: '#fff'
    },
    accent: {
      text: '#1b1b1b',
      background: '#ccc',
      borderColor: '#db0065'
    }
  }
};
