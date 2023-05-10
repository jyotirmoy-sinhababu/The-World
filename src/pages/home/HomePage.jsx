import React, { useContext } from 'react';
import { ApiDataContext } from '../../dataProvider/DataProvider';

import './homeStyle.css';

import Header from '../../components/header/Header';
import Card from '../../components/card/Card';
import Error from '../../components/error/Error';

const HomePage = () => {
  const { isLight, allData, isErr } = useContext(ApiDataContext);

  //handle back

  return (
    <div className={!isLight ? 'home-cnt-dark' : 'home-cnt'}>
      <Header />
      <div className='home-card-cnt'>
        {allData && allData.length ? (
          allData?.map((item) => {
            return (
              <div key={item.population + item.area}>
                <Card data={item} />
              </div>
            );
          })
        ) : !isErr ? (
          <div className='home-err-cnt'>
            <Error />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default HomePage;
