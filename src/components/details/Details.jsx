import React, { useContext, useEffect, useState } from 'react';
import { ApiDataContext } from '../../dataProvider/DataProvider';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const Details = () => {
  const navigate = useNavigate();

  const { isLight, countryNameClicked } = useContext(ApiDataContext);

  const [dtlData, setDtlData] = useState();
  console.log('hi');

  useEffect(() => {
    try {
      axios
        .get(`https://restcountries.com/v3.1/name/${countryNameClicked}`)
        .then((res) => {
          setDtlData(res.data);
          console.log(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, [countryNameClicked]);

  const backBtnFunction = () => {
    navigate('/home');
  };

  return (
    <>
      <div>
        <button
          onClick={() => {
            backBtnFunction();
          }}
        >
          Back
        </button>
      </div>{' '}
      {dtlData && dtlData.length ? (
        <div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div>
          <p>No details Found</p>
        </div>
      )}
    </>
  );
};

export default Details;
