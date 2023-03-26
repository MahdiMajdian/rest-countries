import { useCallback, useContext } from 'react';

import { Moon, MoonFill } from '@assets/images';
import { DarkModeContext } from '@utilities';

import { Header, NavBar, StyledLayout, ToggleDarkMode, Text } from './styles';

type Props = PropsWithMandatoryChildren<StyledProps>;

function Layout({ children }: Props) {
  const { toggleTheme, isDarkMode } = useContext(DarkModeContext);

  const handleDarkModeToggle = useCallback(() => {
    toggleTheme();
  }, []);

  return (
    <StyledLayout>
      <NavBar>
        <Header>Where in the world?</Header>
        <ToggleDarkMode onClick={handleDarkModeToggle}>
          {isDarkMode ? (
            <>
              <MoonFill />
              <Text>Light Mode</Text>
            </>
          ) : (
            <>
              <Moon />
              <Text>Dark Mode</Text>
            </>
          )}
        </ToggleDarkMode>
      </NavBar>
      {children}
    </StyledLayout>
  );
}

export default Layout;
