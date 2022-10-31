import { Global, css, useTheme } from '@emotion/react';

function GlobalStyles() {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Nunito Sans', sans-serif;
        }

        body {
          background-color: ${theme.background.default};
        }
      `}
    />
  );
}

export default GlobalStyles;
