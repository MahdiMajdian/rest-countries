import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CountryCard } from '@modules/countries/components';
import { render } from '@utilities';

const COUNTRY = {
  id: 'IRN',
  name: 'Iran (Free)',
  population: 85000000,
  capital: 'Tehran',
  region: 'Asia',
  flag: { src: 'https://flagcdn.com/ir.svg' },
};

describe('CountryCard', () => {
  describe('Snapshot', () => {
    it('renders', () => {
      const { container } = render(
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<CountryCard country={COUNTRY} />} />
          </Routes>
        </BrowserRouter>
      );

      expect(container).toMatchSnapshot();
    });
  });
});
