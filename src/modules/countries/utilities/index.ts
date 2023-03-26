import { createContext } from 'react';

import { HTTPService, Store } from '../store';

export const StoreContext = createContext<Store>(null!);

export const ServiceContext = createContext<HTTPService>(null!);

export const DEBOUNCE_DELAY = 200;

export const REGIONS = [
  { id: 0, name: 'Filter by Region' },
  { id: 1, name: 'Africa' },
  { id: 2, name: 'Americas' },
  { id: 3, name: 'Asia' },
  { id: 4, name: 'Europe' },
  { id: 5, name: 'Oceania' },
];

export { COUNTRY_NAMES } from './countries-name';
export { ThreeLetterCountryCodeToFullName } from './convert-country-name';
