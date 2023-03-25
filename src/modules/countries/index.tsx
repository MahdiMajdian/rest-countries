import React, {
  useContext,
  useEffect,
  useCallback,
  useState,
  useMemo,
} from 'react';

import { observer } from 'mobx-react';

import { DownArrow, Magnifier, Moon, MoonFill } from '@assets/images';
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
  FilterByRegion,
  SelectBox,
  Icon,
  Option,
} from './styles';
import { StoreContext } from './utilities';

const DEBOUNCE_DELAY = 200;

const REGIONS = [
  { id: 0, name: 'All' },
  { id: 1, name: 'Africa' },
  { id: 2, name: 'Americas' },
  { id: 3, name: 'Asia' },
  { id: 4, name: 'Europe' },
  { id: 5, name: 'Oceania' },
];

function Countries(): React.ReactElement {
  const store = useContext(StoreContext);
  const { toggleTheme, isDarkMode } = useContext(DarkModeContext);

  const [selectedRegion, setSelectedRegion] = useState(REGIONS[0].name);
  const [searchQuery, setSearchQuery] = useState('');

  const handleDarkModeToggle = useCallback(() => {
    toggleTheme();
  }, []);

  const handleFilterByRegionChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedRegion(event.target.value);
    },
    []
  );

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
    store.clearSearchedCountries();

    if (searchQuery === '') {
      return;
    }

    const debounceTimerId = window.setTimeout(() => {
      store.searchForCountries(searchQuery);
    }, DEBOUNCE_DELAY);

    return () => {
      clearTimeout(debounceTimerId);
    };
  }, [searchQuery]);

  const filteredCountries = useMemo(() => {
    if (store.countries === undefined) {
      return undefined;
    }

    return store.countries.filter(({ region }) => {
      if (selectedRegion === REGIONS[0].name) {
        return true;
      }

      return region === selectedRegion;
    });
  }, [store.countries, selectedRegion]);

  const searchedAndFilteredCountries = useMemo(() => {
    if (store.searchedCountries === undefined) {
      return undefined;
    }

    return store.searchedCountries.filter(({ region }) => {
      if (selectedRegion === REGIONS[0].name) {
        return true;
      }

      return region === selectedRegion;
    });
  }, [store.searchedCountries, selectedRegion]);

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

      <FilterByRegion>
        <SelectBox onChange={handleFilterByRegionChange} value={selectedRegion}>
          {REGIONS.map((region) => (
            <Option key={region.id} value={region.name}>
              {region.name}
            </Option>
          ))}
        </SelectBox>

        <Icon>
          <DownArrow />
        </Icon>
      </FilterByRegion>

      <CountryList>
        {searchQuery === ''
          ? filteredCountries === undefined
            ? 'Loading All Countries...'
            : filteredCountries.map((country) => {
                return (
                  <Card key={country.id}>
                    <Flag
                      src={country.flag.src}
                      alt={country.name}
                      loading={'lazy'}
                    />
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
          : searchedAndFilteredCountries === undefined
          ? `Searching for ${searchQuery}`
          : searchedAndFilteredCountries &&
            searchedAndFilteredCountries.length === 0
          ? 'Nothing was found!'
          : searchedAndFilteredCountries.map((country) => {
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
