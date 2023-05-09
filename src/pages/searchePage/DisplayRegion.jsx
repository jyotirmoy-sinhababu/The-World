import React, { useContext } from 'react';
import { ApiDataContext } from '../../dataProvider/DataProvider';

import Card from '../../components/card/Card';
import Error from '../../components/error/Error';

const DisplayRegion = () => {
  const { isLight, dataByRegion } = useContext(ApiDataContext);

  return (
    <>
      {dataByRegion && dataByRegion.length ? (
        dataByRegion?.map((item) => {
          return (
            <div>
              <Card data={item} />;
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
export default DisplayRegion;
