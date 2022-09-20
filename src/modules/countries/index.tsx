import React, { useContext, useEffect } from 'react';

import { observer } from 'mobx-react';

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
} from './styles';
import { StoreContext } from './utilities';

function Countries(): React.ReactElement {
  const store = useContext(StoreContext);

  useEffect(() => {
    store.getCountries();
  }, []);

  return (
    <StyledCountries>
      <Header>Where in the world?</Header>
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
