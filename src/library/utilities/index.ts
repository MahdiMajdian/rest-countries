import { createContext } from 'react';

import { UseDarkModeOutput } from '@hooks/useDarkMode';

export const DarkModeContext = createContext<UseDarkModeOutput>(null!);

export type { Nullable } from './utilityTypes';
export { default as assertUnreachable } from './assertUnreachable';
export { default as isAxiosError } from './isAxiosError';
export { default as apiErrorHandler } from './apiErrorHandler';
export * from './testing';
