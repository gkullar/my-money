import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import 'jest-styled-components';
import AppProviders from '../app-providers';

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AppProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
