import { useCallback, useState } from 'react';

import { Theme } from '@emotion/react';

import { darkTheme, lightTheme } from '@styles/theme';

export interface UseDarkModeOutput {
  theme: Theme;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';

const localTheme = localStorage.getItem('theme');

const initialIsDarkMode =
  localTheme === null
    ? window.matchMedia(COLOR_SCHEME_QUERY).matches
    : localTheme === 'dark';

function useDarkMode(): UseDarkModeOutput {
  const [isDarkMode, setIsDarkMode] = useState(initialIsDarkMode);

  const handleToggleTheme = useCallback(() => {
    setIsDarkMode((prevIsDarkMode) => {
      localStorage.setItem('theme', prevIsDarkMode ? 'light' : 'dark');

      return !prevIsDarkMode;
    });
  }, []);

  return {
    theme: isDarkMode ? darkTheme : lightTheme,
    toggleTheme: handleToggleTheme,
    isDarkMode,
  };
}

export default useDarkMode;
