import React, {
  useContext,
  useEffect,
  useCallback,
  useState,
  useMemo,
} from 'react';

import { observer } from 'mobx-react';

import { ChevronDown, Magnifier } from '@assets/images';

import {
  CountryList,
  Flag,
  Information,
  Card,
  StyledCountries,
  Title,
  Item,
  Value,
  SearchBar,
  SearchIcon,
  Input,
  FilterByRegion,
  SelectBox,
  Icon,
  Option,
  Link,
} from './styles';
import { DEBOUNCE_DELAY, REGIONS, StoreContext } from './utilities';

function Countries(): React.ReactElement {
  const store = useContext(StoreContext);

  const [selectedRegion, setSelectedRegion] = useState(REGIONS[0].name);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQueryChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    },
    []
  );

  const handleFilterByRegionChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedRegion(event.target.value);
    },
    []
  );

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

  return (
    <StyledCountries>
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
          <ChevronDown />
        </Icon>
      </FilterByRegion>

      <CountryList>
        {searchQuery === ''
          ? filteredCountries === undefined
            ? 'Loading All Countries...'
            : filteredCountries.map((country) => {
                return (
                  <Link key={country.id} to={`/country/${country.id}`}>
                    <Card>
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
                  </Link>
                );
              })
          : searchedAndFilteredCountries === undefined
          ? `Searching for ${searchQuery}`
          : searchedAndFilteredCountries &&
            searchedAndFilteredCountries.length === 0
          ? 'Nothing was found!'
          : searchedAndFilteredCountries.map((country) => {
              return (
                <Link key={country.id} to={`/country/${country.id}`}>
                  <Card>
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
                </Link>
              );
            })}
      </CountryList>
    </StyledCountries>
  );
}

export default observer(Countries);
