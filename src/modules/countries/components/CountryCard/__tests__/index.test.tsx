import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CountryCard } from '@modules/countries/components';
import { Country } from '@modules/countries/store';
import { render, screen } from '@utilities';

const COUNTRY: Country = {
  id: 'IRN',
  name: 'Iran (Free)',
  population: 85000000,
  capital: 'Tehran',
  region: 'Asia',
  flag: { src: 'https://flagcdn.com/ir.svg' },
};

describe('CountryCard', () => {
  it('renders the provided data', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CountryCard country={COUNTRY} />} />
        </Routes>
      </BrowserRouter>
    );

    expect(screen.getByText(COUNTRY.name)).toBeVisible();
    expect(screen.getByText(COUNTRY.population)).toBeVisible();
    expect(screen.getByText(COUNTRY.region)).toBeVisible();
    expect(screen.getByText(COUNTRY.capital)).toBeVisible();
    expect(screen.getByRole('img')).toHaveAttribute('alt', COUNTRY.name);
    expect(screen.getByRole('img')).toHaveAttribute('src', COUNTRY.flag.src);
  });
});
