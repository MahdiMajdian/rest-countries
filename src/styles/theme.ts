import { Theme } from '@emotion/react';

export const lightTheme: Theme = {
  palette: {
    primary: 'hsl(200, 15%, 8%)',
    secondary: 'hsl(0, 0%, 52%)',
  },
  background: { default: 'hsl(0, 0%, 98%)', element: 'hsl(0, 0%, 100%)' },
  shadow: {
    main: '0px 0px 4px rgba(0, 0, 0, 0.1)',
  },
  fontWeight: {
    light: 300,
    normal: 600,
    bold: 800,
  },
  breakpoints: {
    mobile: '375xp',
    desktop: '1440px',
  },
};

export const darkTheme: Theme = {
  palette: {
    primary: 'hsl(0, 0%, 100%)',
    secondary: 'hsl(0, 0%, 52%)',
  },
  background: { default: 'hsl(207, 26%, 17%)', element: 'hsl(209, 23%, 22%)' },
  shadow: {
    main: '0px 0px 4px rgba(0, 0, 0, 0.1)',
  },
  fontWeight: {
    light: 300,
    normal: 600,
    bold: 800,
  },
  breakpoints: {
    mobile: '375xp',
    desktop: '1440px',
  },
};
