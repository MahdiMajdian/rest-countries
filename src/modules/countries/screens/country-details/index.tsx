import { useCallback, useContext, useEffect, useMemo } from 'react';

import { observer } from 'mobx-react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { ArrowLeft } from '@assets/images';
import {
  StoreContext,
  ThreeLetterCountryCodeToFullName,
} from '@modules/countries/utilities';

import {
  BackButton,
  GroupTitle,
  Flag,
  Group,
  Item,
  Name,
  StyledCountryDetails,
  Value,
  BorderCountryList,
  BorderCountry,
  CountryName,
} from './styles';

function CountryDetails() {
  const store = useContext(StoreContext);
  const { countryCode } = useParams();
  const navigate = useNavigate();

  const handleNavigateBack = useCallback(() => {
    navigate(-1);
  }, []);

  const countryDetails = useMemo(() => {
    if (store.selectedCountryDetails === undefined) {
      return undefined;
    }

    return store.selectedCountryDetails;
  }, [store.selectedCountryDetails === undefined]);

  useEffect(() => {
    if (countryCode === undefined) {
      return;
    }

    store.getCountryDetails(countryCode);
  }, [countryCode]);

  return (
    <StyledCountryDetails>
      <BackButton onClick={handleNavigateBack}>
        <ArrowLeft />
        Back
      </BackButton>

      {countryDetails === undefined ? (
        'loading details'
      ) : (
        <>
          <Flag src={countryDetails.flag.src} alt={countryDetails.name} />
          <Name>{countryDetails.name}</Name>
          <Group>
            <Item>
              Native Name: <Value>{countryDetails.nativeName}</Value>
            </Item>
            <Item>
              Population: <Value>{countryDetails.population}</Value>
            </Item>
            <Item>
              Region: <Value>{countryDetails.region}</Value>
            </Item>
            <Item>
              Sub Region: <Value>{countryDetails.subRegion}</Value>
            </Item>
            <Item>
              Capital: <Value>{countryDetails.capital}</Value>
            </Item>
          </Group>
          <Group>
            <Item>
              Top Level Domain: <Value>{countryDetails.topLevelDomain}</Value>
            </Item>
            <Item>
              Currencies: <Value>{countryDetails.currencies.join(', ')}</Value>
            </Item>
            <Item>
              Languages: <Value>{countryDetails.languages.join(', ')}</Value>
            </Item>
          </Group>
          <Group>
            <GroupTitle>Border Countries:</GroupTitle>

            {countryDetails.borderCountries === undefined ? (
              `${countryDetails.name} has no border with other countries!`
            ) : (
              <BorderCountryList>
                {countryDetails.borderCountries.map((borderCountry) => {
                  const countryName =
                    ThreeLetterCountryCodeToFullName(borderCountry);

                  return (
                    <BorderCountry key={borderCountry}>
                      <Link to={`/country/${borderCountry}`}>
                        <CountryName title={countryName}>
                          {countryName}
                        </CountryName>
                      </Link>
                    </BorderCountry>
                  );
                })}
              </BorderCountryList>
            )}
          </Group>
        </>
      )}
    </StyledCountryDetails>
  );
}

export default observer(CountryDetails);
