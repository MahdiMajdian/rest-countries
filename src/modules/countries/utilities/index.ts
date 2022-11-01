import { createContext } from 'react';

import { HTTPService, Store } from '../store';

export const StoreContext = createContext<Store>(null!);

export const ServiceContext = createContext<HTTPService>(null!);

export const DEBOUNCE_DELAY = 400;

export const REGIONS = [
  { id: 'all', label: 'Filter by Region' },
  { id: 'africa', label: 'Africa' },
  { id: 'americas', label: 'Americas' },
  { id: 'asia', label: 'Asia' },
  { id: 'europe', label: 'Europe' },
  { id: 'oceania', label: 'Oceania' },
];

export { COUNTRY_NAMES } from './countries-name';
export { ThreeLetterCountryCodeToFullName } from './convertCountryName';
export { filterCountryByRegion } from './filterCountryByRegion';
