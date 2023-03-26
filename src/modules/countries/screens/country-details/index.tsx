import { useCallback, useContext, useEffect, useMemo } from 'react';

import { observer } from 'mobx-react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { ArrowLeft, Reload } from '@assets/images';
import {
  ErrorText,
  LoadingText,
  ReloadBox,
  ReloadButton,
} from '@modules/countries/styles';
import {
  ERROR_MESSAGES,
  ServiceContext,
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
  Information,
  DetailsWrapper,
  Statics,
  BorderCountries,
} from './styles';

function CountryDetails() {
  const store = useContext(StoreContext);
  const httpService = useContext(ServiceContext);

  const { countryCode } = useParams();
  const navigate = useNavigate();

  const handleNavigateBack = useCallback(() => {
    navigate(-1);
  }, []);

  const handleRetryGetCountryDetails = useCallback(() => {
    if (countryCode === undefined) {
      return;
    }

    httpService.countryCode = countryCode;
    store.getCountryDetails();
  }, [countryCode]);

  const countryDetails = useMemo(() => {
    if (store.selectedCountryDetails === undefined) {
      return undefined;
    }

    return store.selectedCountryDetails;
  }, [store.selectedCountryDetails === undefined]);

  const getCountryDetailsErrorContent = useMemo(() => {
    const error = httpService.getCountryDetailsError;
    if (error === undefined) {
      return;
    }

    switch (error.message) {
      case ERROR_MESSAGES.TIME_OUT:
        return (
          <ReloadBox>
            <ErrorText>{ERROR_MESSAGES.TIME_OUT}</ErrorText>
            <ReloadButton onClick={handleRetryGetCountryDetails}>
              Reload data
              <Reload />
            </ReloadButton>
          </ReloadBox>
        );
      case ERROR_MESSAGES.BAD_REQUEST:
        return <ErrorText>{ERROR_MESSAGES.BAD_REQUEST}!</ErrorText>;
    }
  }, [httpService.getCountryDetailsError]);

  useEffect(() => {
    if (countryCode === undefined) {
      return;
    }
    httpService.countryCode = countryCode;
    store.getCountryDetails();
  }, [countryCode]);

  return (
    <StyledCountryDetails>
      <BackButton onClick={handleNavigateBack}>
        <ArrowLeft />
        Back
      </BackButton>

      {countryDetails === undefined ? (
        httpService.getCountryDetailsError ? (
          getCountryDetailsErrorContent
        ) : (
          <LoadingText>loading details...</LoadingText>
        )
      ) : (
        <DetailsWrapper>
          <Flag>
            <img src={countryDetails.flag.src} alt={countryDetails.name} />
          </Flag>
          <Information>
            <Name>{countryDetails.name}</Name>
            <Statics>
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
                  Top Level Domain:
                  <Value>{countryDetails.topLevelDomain}</Value>
                </Item>
                <Item>
                  Currencies:
                  <Value>{countryDetails.currencies.join(', ')}</Value>
                </Item>
                <Item>
                  Languages:
                  <Value>{countryDetails.languages.join(', ')}</Value>
                </Item>
              </Group>
            </Statics>
            <BorderCountries>
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
            </BorderCountries>
          </Information>
        </DetailsWrapper>
      )}
    </StyledCountryDetails>
  );
}

export default observer(CountryDetails);
