import { useState } from 'react';
import appContext from './app-context';

function AppProvider({ children }) {
  const [name, setName] = useState('');

  return (
    <div>
      <appContext.Provider value={{ name, setName }}>
        <div>{children}</div>
      </appContext.Provider>
    </div>
  );
}

export default AppProvider;
