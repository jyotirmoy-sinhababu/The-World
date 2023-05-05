import React, { useState, useEffect, Children } from 'react';

import axios from 'axios';
import { createContext } from 'react';

export const ApiDataContext = createContext();

const FetchData = ({ children }) => {
  const [allData, setAllData] = useState;

  useEffect(() => {
    try {
      axios.get('https://restcountries.com/v3.1/all').then((res) => {
        console.log(res);
        setAllData(res);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <ApiDataContext.Provider value={{ allData }}>
      {children}
    </ApiDataContext.Provider>
  );
};

export default FetchData;
