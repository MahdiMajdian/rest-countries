import { Country, HTTPService } from '@modules/countries/store';

interface ServerCountry {
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
  borders: string[];
  nativeName: string;
  numericCode: string;
  flags: {
    svg: string;
    png: string;
  };
  currencies: { code: string; name: string; symbol: string }[];
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
    try {
      const response = await fetch(`${this.BASE_URL}/v2/all`);

      if (!response.ok) {
        throw new Error('Connection failed with fetching data');
      }

      const data: ServerCountry[] = await response.json();

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
    try {
      const response = await fetch(`${this.BASE_URL}/v2/name/${query}`);

      if (!response.ok) {
        throw new Error('Connection failed with fetching data');
      }

      const data: ServerCountry[] = await response.json();

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
}

const getService = () => {
  return service || new HTTPServiceImpl();
};

export default getService;
