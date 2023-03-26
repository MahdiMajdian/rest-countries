import { useCallback, useEffect } from 'react';

import { Magnifier } from '@assets/images';
import useQueryString from '@hooks/useQueryString';
import { DEBOUNCE_DELAY } from '@modules/countries/utilities';

import { Input, SearchIcon, StyledSearchInput } from './styles';

interface Props {
  onQueryChange: (query: string) => void;
  onExecute: (query: string) => void;
}

function SearchInputComponent({
  onQueryChange,
  onExecute,
}: Props): React.ReactElement {
  const { value: searchQuery, changeValue: setSearchQuery } = useQueryString(
    'search',
    ''
  );

  const handleSearchQueryChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value.replaceAll(' ', ''));
    },
    []
  );

  useEffect(() => {
    onQueryChange(searchQuery);

    if (searchQuery === '') {
      return;
    }

    const debounceTimerId = window.setTimeout(() => {
      onExecute(searchQuery);
    }, DEBOUNCE_DELAY);

    return () => {
      clearTimeout(debounceTimerId);
    };
  }, [searchQuery]);

  return (
    <StyledSearchInput>
      <SearchIcon>
        <Magnifier />
      </SearchIcon>
      <Input
        aria-label='search-input'
        value={searchQuery}
        onChange={handleSearchQueryChange}
        placeholder='Search for a country...'
      />
    </StyledSearchInput>
  );
}

export default SearchInputComponent;
