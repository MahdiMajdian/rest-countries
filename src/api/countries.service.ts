import axios from 'axios';

import { Country, HTTPService } from '@modules/countries/store';
import { CountryDetails, ServerCountry } from '@modules/countries/store/types';

let searchForCountriesAbortController: AbortController | null = null;
let getCountriesAbortController: AbortController | null = null;

let service: HTTPServiceImpl;

class HTTPServiceImpl implements HTTPService {
  private BASE_URL;

  public constructor() {
    const baseURL = process.env.REACT_APP_COUNTRIES_HOST;

    if (baseURL === undefined) {
      throw new Error('base url is not provided as a environment variable');
    }

    this.BASE_URL = baseURL;
  }

  public async getCountries() {
    if (getCountriesAbortController) {
      getCountriesAbortController.abort();
    }

    try {
      getCountriesAbortController = new AbortController();

      const response = await axios.get(`${this.BASE_URL}/v2/all`, {
        signal: getCountriesAbortController.signal,
      });

      if (response.status !== 200) {
        throw new Error('Something went wrong!');
      }

      const data: ServerCountry[] = response.data;

      if (data === undefined) {
        throw new Error('received data is corrupted');
      }

      const countries = this.transformCountries(data);

      return countries;
    } catch (error) {
      // TODO: handle error here
    }
  }

  public async searchForCountries(query: string) {
    if (searchForCountriesAbortController) {
      searchForCountriesAbortController.abort();
    }

    try {
      searchForCountriesAbortController = new AbortController();

      const response = await axios.get(`${this.BASE_URL}/v2/name/${query}`, {
        signal: searchForCountriesAbortController.signal,
      });

      if (response.status !== 200) {
        throw new Error('Something went wrong!');
      }

      const data: ServerCountry[] = response.data;

      if (data === undefined) {
        throw new Error('received data is corrupted');
      }

      const searchedCountries = this.transformCountries(data);

      return searchedCountries;
    } catch (error) {
      // TODO: handle error here
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
        flag: { src: countries.flag },
      };
    });

    return transformedCountries;
  }

  public async getCountryDetails(countryCode: string) {
    try {
      const response = await fetch(`${this.BASE_URL}/v2/alpha/${countryCode}`);

      if (!response.ok) {
        throw new Error('Connection failed with fetching data');
      }

      const data: ServerCountry = await response.json();

      if (data === undefined) {
        throw new Error('received data is corrupted');
      }

      const countryDetails = this.transformCountry(data);

      return countryDetails;
    } catch (error) {
      // TODO: handle error here
    }
  }

  private transformCountry(country: ServerCountry): CountryDetails {
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

const getService = () => {
  return service || new HTTPServiceImpl();
};

export default getService;
