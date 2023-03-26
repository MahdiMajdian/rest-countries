import axios from 'axios';
import { action, makeObservable, observable } from 'mobx';

import { Country, HTTPService } from '@modules/countries/store';
import {
  CountryDetails,
  ErrorType,
  ServerCountry,
} from '@modules/countries/store/types';
import { isAxiosError, Nullable, apiErrorHandler } from '@utilities';

let searchForCountriesAbortController: AbortController | null = null;
let getCountriesAbortController: AbortController | null = null;
let getCountryDetailsAbortController: AbortController | null = null;

let service: HTTPServiceImpl;
const COUNTRY_DETAILS_FIELDS =
  'name,alpha3Code,nativeName,population,region,subregion,capital,flag,currencies,topLevelDomain,languages,borders';
const COUNTRIES_FIELDS = 'name,flags,population,region,capital,alpha3Code';
class HTTPServiceImpl implements HTTPService {
  private BASE_URL;
  public searchForCountriesError: Nullable<ErrorType>;
  public getCountriesError: Nullable<ErrorType>;
  public getCountryDetailsError: Nullable<ErrorType>;
  public countryCode: Nullable<string>;

  public constructor() {
    const baseURL = process.env.REACT_APP_COUNTRIES_HOST;

    if (baseURL === undefined) {
      throw new Error('base url is not provided as a environment variable');
    }

    makeObservable(this, {
      searchForCountriesError: observable,
      searchForCountries: action.bound,
      getCountriesError: observable,
      getCountries: action.bound,
      getCountryDetailsError: observable,
      getCountryDetails: action.bound,
    });

    this.BASE_URL = baseURL;
    this.searchForCountriesError = undefined;
    this.getCountriesError = undefined;
    this.getCountryDetailsError = undefined;
    this.countryCode = undefined;
  }

  public async getCountries() {
    if (getCountriesAbortController) {
      getCountriesAbortController.abort();
    }

    try {
      getCountriesAbortController = new AbortController();
      this.getCountriesError = undefined;

      const response = await axios.get(
        `${this.BASE_URL}/v2/all?fields=${COUNTRIES_FIELDS}`,
        {
          signal: getCountriesAbortController.signal,
        }
      );

      const data: ServerCountry[] = response.data;

      if (data === undefined) {
        throw new Error('received data is corrupted');
      }

      const countries = this.transformCountries(data);

      return countries;
    } catch (error) {
      if (isAxiosError(error)) {
        this.getCountriesError = apiErrorHandler(error);
      }
    }
  }

  public async searchForCountries(query: string) {
    if (searchForCountriesAbortController) {
      searchForCountriesAbortController.abort();
    }

    try {
      searchForCountriesAbortController = new AbortController();
      this.searchForCountriesError = undefined;

      const response = await axios.get(
        `${this.BASE_URL}/v2/name/${query}?fields=${COUNTRIES_FIELDS}`,
        {
          signal: searchForCountriesAbortController.signal,
        }
      );

      const data: ServerCountry[] = response.data;

      if (data === undefined) {
        throw new Error('received data is corrupted');
      }

      const searchedCountries = this.transformCountries(data);

      return searchedCountries;
    } catch (error) {
      if (isAxiosError(error)) {
        this.searchForCountriesError = apiErrorHandler(error);
      }
    }
  }

  private transformCountries(countries: ServerCountry[]): Country[] {
    const transformedCountries = countries.map((countries) => {
      return {
        id: countries.alpha3Code,
        name: countries.name,
        population: countries.population,
        region: countries.region,
        capital: countries.capital,
        flag: { src: countries.flags.svg },
      };
    });

    return transformedCountries;
  }

  public async getCountryDetails() {
    if (getCountryDetailsAbortController) {
      getCountryDetailsAbortController.abort();
    }

    try {
      getCountryDetailsAbortController = new AbortController();
      this.getCountryDetailsError = undefined;

      const response = await axios.get(
        `${this.BASE_URL}/v2/alpha/${this.countryCode}?fields=${COUNTRY_DETAILS_FIELDS}`,
        {
          signal: getCountryDetailsAbortController.signal,
        }
      );

      const data: ServerCountry = await response.data;

      if (data === undefined) {
        throw new Error('received data is corrupted');
      }

      const countryDetails = this.transformCountryDetails(data);

      return countryDetails;
    } catch (error) {
      if (isAxiosError(error)) {
        this.getCountryDetailsError = apiErrorHandler(error);
      }
    }
  }

  private transformCountryDetails(country: ServerCountry): CountryDetails {
    return {
      id: country.alpha3Code,
      name: country.name,
      nativeName: country.nativeName,
      population: country.population,
      region: country.region,
      subRegion: country.subregion,
      capital: country.capital,
      flag: { src: country.flag },
      currencies: country.currencies.map((currency) => currency.name),
      topLevelDomain: country.topLevelDomain[0],
      languages: country.languages.map((language) => language.name),
      borderCountries: country.borders,
    };
  }
}

function getService() {
  if (service === undefined) {
    service = new HTTPServiceImpl();
  }

  return service;
}

export default getService;
