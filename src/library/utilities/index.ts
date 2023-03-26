import { createContext } from 'react';

import { UseDarkModeOutput } from '@hooks/useDarkMode';

export const DarkModeContext = createContext<UseDarkModeOutput>(null!);

export type { Nullable } from './utilityTypes';
export { default as assertUnreachable } from './assertUnreachable';
export * from './testing';
