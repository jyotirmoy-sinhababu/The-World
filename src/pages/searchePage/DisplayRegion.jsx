import React, { useContext } from 'react';
import { ApiDataContext } from '../../dataProvider/DataProvider';

import Card from '../../components/card/Card';
import Error from '../../components/error/Error';
import BtnCnt from '../../components/btnCnt/BtnCnt';

import './searchPageStyle.css';

const DisplayRegion = () => {
  const { isLight, dataByRegion } = useContext(ApiDataContext);

  return (
    <>
      <BtnCnt />
      <div className='searched-page-cnt'>
        {dataByRegion && dataByRegion.length ? (
          dataByRegion?.map((item) => {
            return (
              <div key={item.population + item.area}>
                <Card data={item} />
              </div>
            );
          })
        ) : (
          <div>
            <Error />
          </div>
        )}
      </div>
    </>
  );
};
export default DisplayRegion;
