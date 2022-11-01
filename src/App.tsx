import { ThemeProvider } from '@emotion/react';

import useDarkMode from '@hooks/useDarkMode';
import Layout from '@modules/layout';
import Routes from '@routes';
import GlobalStyles from '@styles/GlobalStyles';
import { DarkModeContext } from '@utilities';

function App() {
  const darkModeOptions = useDarkMode();

  return (
    <DarkModeContext.Provider value={darkModeOptions}>
      <ThemeProvider theme={darkModeOptions.theme}>
        <GlobalStyles />
        <Layout>
          <Routes />
        </Layout>
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
}

export default App;
