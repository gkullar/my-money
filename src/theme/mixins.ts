import { ThemedCssFunction, css } from 'styled-components';
import { breakpoints } from './theme';

export const toEm = (pxValue: number) => `${pxValue / 16}em`;

export const respondTo = (Object.keys(breakpoints) as Array<
  keyof typeof breakpoints
>).reduce(
  (accumulator, label) => {
    accumulator[label] = (first: any, ...interpolations: any[]) => css`
      @media (min-width: ${toEm(breakpoints[label])}) {
        ${css(first, ...interpolations)};
      }
    `;
    return accumulator;
  },
  {} as { [key in keyof typeof breakpoints]: ThemedCssFunction<{}> }
);
