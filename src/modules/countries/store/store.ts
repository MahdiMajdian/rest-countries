import { useMemo } from 'react';

import { action, makeObservable, observable, runInAction } from 'mobx';

import { Nullable } from '@utilities';

import { Country, CountryDetails, HTTPService } from './types';

let store: Store;

class Store {
  public countries: Nullable<Country[]>;
  public searchedCountries: Nullable<Country[]>;
  public selectedCountryDetails: Nullable<CountryDetails>;

  public constructor(private service: HTTPService) {
    makeObservable(this, {
      countries: observable,
      getCountries: action.bound,
      selectedCountryDetails: observable,
      getCountryDetails: action.bound,
      searchedCountries: observable,
      searchForCountries: action.bound,
      clearSearchedCountries: action.bound,
    });

    this.countries = undefined;
    this.selectedCountryDetails = undefined;
    this.searchedCountries = undefined;
  }

  public async getCountries(): Promise<void> {
    if (this.countries !== undefined) {
      this.countries = undefined;
    }

    const countries = await this.service.getCountries();

    runInAction(() => {
      this.countries = countries;
    });
  }

  public async searchForCountries(countryName: string): Promise<void> {
    if (this.searchedCountries !== undefined) {
      this.searchedCountries = undefined;
    }

    const searchedCountries = await this.service.searchForCountries(
      countryName
    );

    runInAction(() => {
      this.searchedCountries = searchedCountries;
    });
  }

  public clearSearchedCountries() {
    this.searchedCountries = undefined;
  }

  public async getCountryDetails() {
    if (this.selectedCountryDetails !== undefined) {
      this.selectedCountryDetails = undefined;
    }

    const countryDetails = await this.service.getCountryDetails();
    runInAction(() => {
      this.selectedCountryDetails = countryDetails;
    });
  }
}

function initializeStore(service: HTTPService): Store {
  const instance = store || new Store(service);

  if (!store) {
    store = instance;
  }

  return instance;
}

function useStore(service: HTTPService) {
  const memoizedStore = useMemo(() => initializeStore(service), [service]);
  return memoizedStore;
}

export type { Store };

export default useStore;
