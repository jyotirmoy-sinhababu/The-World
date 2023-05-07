import React, { useContext } from 'react';
import { ApiDataContext } from '../../dataProvider/DataProvider';

import './homeStyle.css';

import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header';
import Card from '../../components/card/Card';
import Error from '../../components/error/Error';

const HomePage = () => {
  const { isLight, allData, dataBySearch, dataByRegion } =
    useContext(ApiDataContext);

  return (
    <div className={!isLight ? 'home-cnt-dark' : 'home-cnt'}>
      <Nav />
      <Header />
      {allData && allData.length ? (
        allData?.map((item) => {
          return (
            <div>
              <Card data={item} />
            </div>
          );
        })
      ) : dataBySearch && dataBySearch.length ? (
        dataBySearch?.map((item) => {
          return (
            <div>
              <Card data={item} />
            </div>
          );
        })
      ) : dataByRegion && dataByRegion.length ? (
        dataByRegion?.map((item) => {
          return (
            <div>
              <Card data={item} />
            </div>
          );
        })
      ) : (
        <Error />
      )}
    </div>
  );
};

export default HomePage;
