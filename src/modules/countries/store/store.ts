import { useMemo } from 'react';

import { action, makeObservable, observable, runInAction } from 'mobx';

import { Nullable } from '@utilities';

import { Country, HTTPService } from './types';

let store: Store;

class Store {
  public countries: Nullable<Country[]>;
  public searchedCountries: Nullable<Country[]>;

  public constructor(private service: HTTPService) {
    makeObservable(this, {
      countries: observable,
      getCountries: action.bound,
      searchedCountries: observable,
      searchForCountries: action.bound,
      clearSearchedCountries: action.bound,
    });

    this.countries = undefined;
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
