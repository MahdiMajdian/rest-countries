import React from 'react';

import { observer } from 'mobx-react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { getCountriesHttpService } from '@api';
import Countries from '@modules/countries';
import { useStore } from '@modules/countries/store';
import {
  StoreContext as CountriesStoreContext,
  ServiceContext as CountriesServiceContext,
} from '@modules/countries/utilities';

function RoutesComponent(): React.ReactElement {
  const countriesHttpService = getCountriesHttpService();

  const countriesStore = useStore(countriesHttpService);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <CountriesStoreContext.Provider value={countriesStore}>
              <CountriesServiceContext.Provider value={countriesHttpService}>
                <Countries />
              </CountriesServiceContext.Provider>
            </CountriesStoreContext.Provider>
          }
        />
        <Route path='/*' element={<Navigate to={'/'} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default observer(RoutesComponent);
