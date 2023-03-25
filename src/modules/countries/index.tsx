import React, { useContext, useEffect, useCallback, useState } from 'react';

import { observer } from 'mobx-react';

import { Magnifier, Moon, MoonFill } from '@assets/images';
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
  SearchBar,
  SearchIcon,
  Input,
} from './styles';
import { StoreContext } from './utilities';

function Countries(): React.ReactElement {
  const store = useContext(StoreContext);
  const { toggleTheme, isDarkMode } = useContext(DarkModeContext);

  const [searchQuery, setSearchQuery] = useState('');

  const handleDarkModeToggle = useCallback(() => {
    toggleTheme();
  }, []);

  const handleSearchQueryChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    },
    []
  );

  useEffect(() => {
    store.getCountries();
  }, []);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    store.searchForCountries(searchQuery);
  }, [searchQuery]);

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
      <SearchBar>
        <SearchIcon>
          <Magnifier />
        </SearchIcon>

        <Input
          value={searchQuery}
          onChange={handleSearchQueryChange}
          placeholder='Search for a country...'
        />
      </SearchBar>
      <CountryList>
        {searchQuery === ''
          ? store.countries === undefined
            ? 'Loading All Countries...'
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
              })
          : store.searchedCountries === undefined
          ? `Searching for ${searchQuery}`
          : store.searchedCountries.map((country) => {
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
