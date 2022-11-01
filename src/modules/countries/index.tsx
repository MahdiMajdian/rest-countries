import React, {
  useContext,
  useEffect,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { observer } from 'mobx-react';

import { ChevronDown, Reload } from '@assets/images';
import useQueryString from '@hooks/useQueryString';

import { CountryCard, SearchInput } from './components';
import {
  CountryList,
  StyledCountries,
  FilterByRegion,
  SelectBox,
  Icon,
  Option,
  MenuBar,
  ReloadBox,
  ReloadButton,
  ErrorText,
  LoadingText,
} from './styles';
import {
  ERROR_MESSAGES,
  filterCountryByRegion,
  REGIONS,
  ServiceContext,
  StoreContext,
} from './utilities';
function Countries(): React.ReactElement {
  const store = useContext(StoreContext);
  const httpService = useContext(ServiceContext);

  const [searchQuery, setSearchQuery] = useState('');
  const { value: selectedRegion, changeValue: setSelectedRegion } =
    useQueryString('region', REGIONS[0].id);

  const handleSearchQueryChange = useCallback((searchQuery: string) => {
    setSearchQuery(searchQuery);
    store.clearSearchedCountries();
  }, []);

  const handleSearchForCountries = useCallback((searchQuery: string) => {
    store.searchForCountries(searchQuery);
  }, []);

  const handleRetrySearchForCountries = useCallback(() => {
    handleSearchForCountries(searchQuery);
  }, [searchQuery]);

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

  const searchForCountriesErrorContent = useMemo(() => {
    const error = httpService.searchForCountriesError;
    if (error === undefined) {
      return;
    }

    switch (error.message) {
      case ERROR_MESSAGES.NOT_FOUND:
        return <ErrorText>{ERROR_MESSAGES.NOT_FOUND}!</ErrorText>;
      case ERROR_MESSAGES.TIME_OUT:
        return (
          <ReloadBox>
            <ErrorText>{ERROR_MESSAGES.TIME_OUT}</ErrorText>
            <ReloadButton onClick={handleRetrySearchForCountries}>
              Reload data
              <Reload />
            </ReloadButton>
          </ReloadBox>
        );
    }
  }, [httpService.searchForCountriesError]);

  useEffect(() => {
    store.getCountries();
  }, []);

  return (
    <StyledCountries>
      <MenuBar>
        <SearchInput
          onQueryChange={handleSearchQueryChange}
          onExecute={handleSearchForCountries}
        />

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
        {searchQuery === '' ? (
          filteredCountries === undefined ? (
            <LoadingText>Loading All Countries...</LoadingText>
          ) : (
            filteredCountries.map((country) => {
              return <CountryCard key={country.id} country={country} />;
            })
          )
        ) : null}

        {searchQuery === '' ? null : searchedAndFilteredCountries ===
          undefined ? (
          httpService.searchForCountriesError ? (
            searchForCountriesErrorContent
          ) : (
            <LoadingText>Searching for {searchQuery}</LoadingText>
          )
        ) : searchedAndFilteredCountries &&
          searchedAndFilteredCountries.length === 0 ? (
          <ErrorText>Nothing was found!</ErrorText>
        ) : (
          searchedAndFilteredCountries.map((country) => {
            return <CountryCard key={country.id} country={country} />;
          })
        )}
      </CountryList>
    </StyledCountries>
  );
}

export default observer(Countries);
