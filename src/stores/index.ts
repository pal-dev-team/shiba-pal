import { createContext } from 'react';
import { ApplicationStore } from './application.store';


// export default RootStore;
export const rootStoreContext = createContext({
  applicationStore: new ApplicationStore(),
});
