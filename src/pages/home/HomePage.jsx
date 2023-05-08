import React, { useContext } from 'react';
import { ApiDataContext } from '../../dataProvider/DataProvider';

import './homeStyle.css';

import Header from '../../components/header/Header';
import Card from '../../components/card/Card';
import Error from '../../components/error/Error';

const HomePage = () => {
  const { isLight, allData, dataBySearch, dataByRegion } =
    useContext(ApiDataContext);

  return (
    <div className={!isLight ? 'home-cnt-dark' : 'home-cnt'}>
      <Header />
      <div className={!isLight ? 'home-card-cnt-dark' : 'home-card-cnt'}>
        {' '}
        {dataBySearch && dataBySearch.length ? (
          dataBySearch?.map((item) => {
            return (
              <div key={item.population + item.area}>
                <Card data={item} />
              </div>
            );
          })
        ) : dataByRegion && dataByRegion.length ? (
          dataByRegion?.map((item) => {
            return (
              <div key={item.population + item.area}>
                <Card data={item} />
              </div>
            );
          })
        ) : allData && allData.length ? (
          allData?.map((item) => {
            return (
              <div key={item.population + item.area}>
                <Card data={item} />
              </div>
            );
          })
        ) : (
          <Error />
        )}
      </div>
    </div>
  );
};

export default HomePage;
