import  { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchAddress, setSearchAddress] = useState('');

  return (
    <SearchContext.Provider value={{ searchAddress, setSearchAddress }}>
      {children}
    </SearchContext.Provider>
  );
};
