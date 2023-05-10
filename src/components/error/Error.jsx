import React, { useContext } from 'react';
import { ApiDataContext } from '../../dataProvider/DataProvider';

import './error.css';

const Error = () => {
  const { isLight } = useContext(ApiDataContext);

  return (
    <div
      className={`error-cnt ${!isLight ? 'error-cnt-dark' : 'error-cnt-light'}`}
    >
      <p
        className={`error-txt ${
          !isLight ? 'error-txt-dark' : 'error-txt-light'
        }`}
      >
        something went wrong...
      </p>
      <p
        className={`error-txt ${
          !isLight ? 'error-txt-dark' : 'error-txt-light'
        }`}
      >
        Data Not Found
      </p>
    </div>
  );
};

export default Error;
