import { createContext } from 'react';

import { HTTPService, Store } from '../store';

export const StoreContext = createContext<Store>(null!);

export const ServiceContext = createContext<HTTPService>(null!);
