import React, { useContext, useEffect, useCallback, useMemo } from 'react';

import { observer } from 'mobx-react';

import { ChevronDown, Magnifier } from '@assets/images';
import useQueryString from '@hooks/useQueryString';

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
  MenuBar,
} from './styles';
import {
  DEBOUNCE_DELAY,
  filterCountryByRegion,
  REGIONS,
  StoreContext,
} from './utilities';
function Countries(): React.ReactElement {
  const store = useContext(StoreContext);

  const { value: searchQuery, changeValue: setSearchQuery } = useQueryString(
    'search',
    ''
  );

  const { value: selectedRegion, changeValue: setSelectedRegion } =
    useQueryString('region', REGIONS[0].id);

  const handleSearchQueryChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value.replace(' ', ''));
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
    return filterCountryByRegion(store.countries, selectedRegion);
  }, [store.countries, selectedRegion]);

  const searchedAndFilteredCountries = useMemo(() => {
    if (store.searchedCountries === undefined) {
      return undefined;
    }
    return filterCountryByRegion(store.searchedCountries, selectedRegion);
  }, [store.searchedCountries, selectedRegion]);

  useEffect(() => {
    if (searchQuery !== '') {
      store.searchForCountries(searchQuery);
    }
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
      <MenuBar>
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
          <SelectBox
            onChange={handleFilterByRegionChange}
            value={selectedRegion}
          >
            {REGIONS.map((region) => (
              <Option key={region.id} value={region.id}>
                {region.label}
              </Option>
            ))}
          </SelectBox>

          <Icon>
            <ChevronDown />
          </Icon>
        </FilterByRegion>
      </MenuBar>

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
