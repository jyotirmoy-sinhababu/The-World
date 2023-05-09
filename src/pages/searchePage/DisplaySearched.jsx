import React, { useContext } from 'react';
import { ApiDataContext } from '../../dataProvider/DataProvider';

import Card from '../../components/card/Card';
import Error from '../../components/error/Error';

const DisplaySearched = () => {
  const { isLight, dataBySearch } = useContext(ApiDataContext);

  return (
    <>
      {dataBySearch && dataBySearch.length ? (
        dataBySearch?.map((item) => {
          return (
            <div>
              <Card data={item} />
            </div>
          );
        })
      ) : (
        <div>
          <Error />
        </div>
      )}
    </>
  );
};

export default DisplaySearched;
