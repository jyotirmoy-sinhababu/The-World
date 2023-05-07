import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { createContext } from 'react';

export const ApiDataContext = createContext();

const FetchData = ({ children }) => {
  // use state hook hold api data for three separate conditions,
  const [allData, setAllData] = useState();
  const [dataBySearch, setDataBySearch] = useState();
  const [dataByRegion, setDataByRegion] = useState();

  // holds the data to toggle between light and dark.
  const [isLight, setIsLight] = useState(true);

  //state to monitor searchbar
  const [searchInput, setSearchInput] = useState();

  //handleChange for search
  const handleChange = (e) => {
    setSearchInput({ ...searchInput, [e.target.name]: e.target.value });
  };
  // calls the api and fetch all data
  useEffect(() => {
    try {
      axios.get('https://restcountries.com/v3.1/all').then((res) => {
        // console.log(res);
        setAllData(res);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  // fetch by search details
  const handleSearch = async () => {
    try {
      await axios
        .get(`https://restcountries.com/v3.1/name/${searchInput.name}`)
        .then((res) => {
          setDataBySearch(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  //fetch by region
  const handleRegionChange = async (region) => {
    try {
      await axios
        .get(`https://restcountries.com/v3.1/region/${region}`)
        .then((res) => {
          setDataByRegion(res.data);
          console.log(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ApiDataContext.Provider
      value={{
        allData,
        isLight,
        dataBySearch,
        dataByRegion,
        setIsLight,
        handleChange,
        handleSearch,
        handleRegionChange,
      }}
    >
      {children}
    </ApiDataContext.Provider>
  );
};

export default FetchData;
