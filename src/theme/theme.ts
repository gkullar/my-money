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
  Light,
  Dark
}

export const themes: Themes = {
  light: {
    base: {
      text: '#1b1b1b',
      background: '#fff'
    },
    accent: {
      text: '#fff',
      background: '#37414f'
    }
  },
  dark: {
    base: {
      text: '#fff',
      background: '#14233C'
    },
    accent: {
      text: '#fff',
      background: '#28a2b9'
    }
  }
};
