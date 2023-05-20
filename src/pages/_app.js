// _app.js

import { createContext, useContext, useState } from 'react';

export const GlobalContext = createContext('키보드');

export default function MyApp({ Component, pageProps }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <GlobalContext.Provider value={inputValue}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}
