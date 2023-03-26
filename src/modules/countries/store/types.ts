import { Nullable } from '@utilities';

import { COUNTRY_NAMES } from '../utilities';

export interface Country {
  id: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: {
    src: string;
  };
}

export interface ServerCountry {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  timezones: string[];
  borders: (keyof typeof COUNTRY_NAMES)[];
  nativeName: string;
  numericCode: string;
  flags: {
    svg: string;
    png: string;
  };
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
  languages: {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }[];
  translations: {
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    hu: string;
  };
  flag: string;
  regionalBlocs: {
    acronym: string;
    name: string;
  }[];
  cioc: string;
  independent: boolean;
}

export interface CountryDetails {
  id: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subRegion: string;
  topLevelDomain: string;
  capital: string;
  flag: {
    src: string;
  };
  currencies: string[];
  languages: string[];
  borderCountries: Nullable<(keyof typeof COUNTRY_NAMES)[]>;
}

export interface ErrorType {
  message: string;
}

export interface HTTPService {
  getCountries: () => Promise<Nullable<Country[]>>;
  getCountriesError: Nullable<ErrorType>;

  getCountryDetails: () => Promise<Nullable<CountryDetails>>;
  getCountryDetailsError: Nullable<ErrorType>;

  searchForCountries: (query: string) => Promise<Nullable<Country[]>>;
  searchForCountriesError: Nullable<ErrorType>;

  countryCode: Nullable<string>;
}
