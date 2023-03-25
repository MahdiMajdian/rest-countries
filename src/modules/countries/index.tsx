import React, { useContext, useEffect, useCallback } from 'react';

import { observer } from 'mobx-react';

import { Moon, MoonFill } from '@assets/images';
import { DarkModeContext } from '@utilities';

import {
  CountryList,
  Flag,
  NavBar,
  Information,
  Card,
  StyledCountries,
  Title,
  Item,
  Value,
  ToggleDarkMode,
  Header,
  Text,
} from './styles';
import { StoreContext } from './utilities';

function Countries(): React.ReactElement {
  const store = useContext(StoreContext);
  const { toggleTheme, isDarkMode } = useContext(DarkModeContext);

  const handleDarkModeToggle = useCallback(() => {
    toggleTheme();
  }, []);

  useEffect(() => {
    store.getCountries();
  }, []);

  return (
    <StyledCountries>
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
      <CountryList>
        {store.countries === undefined
          ? 'Loading...'
          : store.countries.map((country) => {
              return (
                <Card key={country.id}>
                  <Flag src={country.flag.src} alt='' />
                  <Information>
                    <Title>{country.name}</Title>
                    <Item>
                      Population: <Value>{country.population}</Value>
                    </Item>
                    <Item>
                      Region: <Value>{country.region}</Value>
                    </Item>
                    <Item>
                      Capital: <Value>{country.capital}</Value>
                    </Item>
                  </Information>
                </Card>
              );
            })}
      </CountryList>
    </StyledCountries>
  );
}

export default observer(Countries);
