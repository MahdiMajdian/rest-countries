import { Nullable } from '@utilities';

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

export interface HTTPService {
  getCountries: () => Promise<Nullable<Country[]>>;
  searchForCountries: (query: string) => Promise<Nullable<Country[]>>;
}
