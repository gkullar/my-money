import { DefaultTheme } from 'styled-components';

export interface Palettes {
  base: DefaultTheme;
  accent: DefaultTheme;
}

export interface Themes {
  light: Palettes;
  dark: Palettes;
}

export interface Breakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
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
      border: '#37414f',
      error: '#ff5248'
    },
    accent: {
      text: '#fff',
      background: '#00dba3',
      border: '#5f6b7d',
      error: '#e83c32'
    }
  },
  dark: {
    base: {
      text: '#fff',
      background: '#2d1d29',
      border: '#db0065',
      error: '#e83c32'
    },
    accent: {
      text: '#1b1b1b',
      background: '#00dba3',
      border: '#fff',
      error: '#ff5248'
    }
  }
};

export const breakpoints: Breakpoints = {
  lg: 1200,
  md: 992,
  sm: 768,
  xs: 480
};
