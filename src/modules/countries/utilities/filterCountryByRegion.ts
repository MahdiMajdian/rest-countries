import { REGIONS } from '.';
import { Country } from '../store';

export function filterCountryByRegion(
  array: Country[],
  selectedRegion: string
) {
  const results = array.filter(({ region }) => {
    if (selectedRegion === REGIONS[0].id) return true;

    const selectedOption = REGIONS.find(
      (region) => region.id === selectedRegion
    );

    return selectedOption?.label === region;
  });

  return results;
}
