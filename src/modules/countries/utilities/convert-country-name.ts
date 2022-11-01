import { COUNTRY_NAMES } from './countries-name';

export function ThreeLetterCountryCodeToFullName(
  code: keyof typeof COUNTRY_NAMES
): string {
  return COUNTRY_NAMES[code];
}
