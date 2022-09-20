import { useEffect } from 'react';

import Routes from '@routes';
import { theme } from '@styles/theme';

function App() {
  useEffect(() => {
    document.body.setAttribute(
      'style',
      `background: ${theme.background.default};`
    );
  }, []);

  return <Routes />;
}

export default App;
