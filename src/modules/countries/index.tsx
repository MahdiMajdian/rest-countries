import React, { useContext, useEffect, useCallback } from 'react';

import { observer } from 'mobx-react';

import { Moon, MoonFill } from '@assets/images';
import { DarkModeContext } from '@utilities';

import {
  CountryList,
  Flag,
  Header,
  Information,
  Card,
  StyledCountries,
  Title,
  Item,
  Value,
  ToggleDarkMode,
} from './styles';
import { StoreContext } from './utilities';

function Countries(): React.ReactElement {
  const store = useContext(StoreContext);
  const { toggleTheme, isDarkMode } = useContext(DarkModeContext);

  const handleDarkMode = useCallback(() => {
    toggleTheme();
  }, []);

  useEffect(() => {
    store.getCountries();
  }, []);

  return (
    <StyledCountries>
      <Header>
        <span>Where in the world?</span>
        <ToggleDarkMode onClick={handleDarkMode}>
          {isDarkMode ? (
            <>
              <MoonFill />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <Moon />
              <span>Dark Mode</span>
            </>
          )}
        </ToggleDarkMode>
      </Header>
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
