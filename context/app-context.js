import { createContext } from 'react';

const appContext = createContext({
  name: '',
  setName: () => null,
});

export default appContext;
