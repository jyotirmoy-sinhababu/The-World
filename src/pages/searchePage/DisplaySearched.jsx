import React, { useContext } from 'react';
import { ApiDataContext } from '../../dataProvider/DataProvider';

import Card from '../../components/card/Card';
import Error from '../../components/error/Error';
import BtnCnt from '../../components/btnCnt/BtnCnt';

import './searchPageStyle.css';

const DisplaySearched = () => {
  const { isLight, dataBySearch } = useContext(ApiDataContext);

  return (
    <>
      <BtnCnt />
      <div className='searched-page-cnt'>
        {dataBySearch && dataBySearch.length ? (
          dataBySearch?.map((item) => {
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

export default DisplaySearched;
