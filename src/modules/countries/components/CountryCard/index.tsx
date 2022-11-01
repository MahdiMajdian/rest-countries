import { Country } from '@modules/countries/store';

import {
  Card,
  Flag,
  Information,
  Item,
  Link,
  StyledCountryCard,
  Title,
  Value,
} from './styles';

interface Props {
  country: Country;
}

function CountryCardComponent({ country }: Props) {
  return (
    <StyledCountryCard>
      <Link to={`/country/${country.id}`}>
        <Card>
          <Flag src={country.flag.src} alt={country.name} loading={'lazy'} />
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
    </StyledCountryCard>
  );
}

export default CountryCardComponent;
