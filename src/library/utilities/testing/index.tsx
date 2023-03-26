import { ReactElement } from 'react';

import { ThemeProvider } from '@emotion/react';
import {
  render as originalRender,
  screen,
  within,
  fireEvent,
  waitFor,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { darkTheme } from '@styles/theme';

const theme = darkTheme;

function AllTheProviders({ children }: PropsWithMandatoryChildren<unknown>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

function render(ui: ReactElement, options?: RenderOptions): RenderResult {
  return originalRender(ui, { wrapper: AllTheProviders, ...options });
}

export { screen, render, within, userEvent, fireEvent, waitFor };
