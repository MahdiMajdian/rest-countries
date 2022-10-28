import React, { useContext, useEffect } from 'react';

import { observer } from 'mobx-react';

import { StyledCountries } from './styles';
import { StoreContext } from './utilities';

function Countries(): React.ReactElement {
  const store = useContext(StoreContext);

  useEffect(() => {
    store.getCountries();
  }, []);

  return (
    <StyledCountries>
      {store.countries === undefined ? (
        'Loading...'
      ) : (
        <ul>
          {store.countries.map((country) => {
            return <div key={country.id}>{country.name}</div>;
          })}
        </ul>
      )}
    </StyledCountries>
  );
}

export default observer(Countries);
