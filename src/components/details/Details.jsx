import React, { useContext, useEffect, useState } from 'react';
import { ApiDataContext } from '../../dataProvider/DataProvider';

import BtnCnt from '../../components/btnCnt/BtnCnt';
import Error from '../error/Error';

import './details.css';

import axios from 'axios';

const Details = () => {
  const { isLight, countryNameClicked } = useContext(ApiDataContext);

  const [dtlData, setDtlData] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(`https://restcountries.com/v3.1/name/${countryNameClicked}`)
        .then((res) => {
          setDtlData(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, [countryNameClicked]);

  return (
    <div>
      <BtnCnt />
      {dtlData && dtlData.length ? (
        <div className='main-details-cnt'>
          <div className='details-img-cnt'>
            {dtlData[0].flags ? (
              <img
                className={`details-img ${
                  !isLight ? 'details-img-dark' : null
                }`}
                src={dtlData[0].flags.svg}
                alt={dtlData[0].flags.alt}
              />
            ) : null}
          </div>
          <div className='details-data-cnt'>
            <div className='details-data-firstcnt'>
              <div>
                {dtlData[0].name ? (
                  <p
                    className={`dtl-para-name ${
                      !isLight ? 'dtl-para-dark' : 'dtl-para-name'
                    }`}
                  >
                    {dtlData[0].name.common}
                  </p>
                ) : null}
              </div>
              <div>
                {dtlData[0].name.official ? (
                  <p
                    className={`dtl-para ${
                      !isLight ? 'dtl-para-dark' : 'null'
                    }`}
                  >
                    <strong>Official Name:</strong> {dtlData[0].name.official}
                  </p>
                ) : null}
                {dtlData[0].region ? (
                  <p
                    className={`dtl-para ${
                      !isLight ? 'dtl-para-dark' : 'null'
                    }`}
                  >
                    <strong>Region:</strong> {dtlData[0].region}
                  </p>
                ) : null}
                {dtlData[0].subregion ? (
                  <p
                    className={`dtl-para ${
                      !isLight ? 'dtl-para-dark' : 'null'
                    }`}
                  >
                    <strong>Sub-Region:</strong> {dtlData[0].subregion}
                  </p>
                ) : null}
                {dtlData[0].capital ? (
                  <p
                    className={`dtl-para ${
                      !isLight ? 'dtl-para-dark' : 'null'
                    }`}
                  >
                    <strong>Capital:</strong> {dtlData[0].capital[0]}
                  </p>
                ) : null}
              </div>
            </div>
            <div className='details-data-secondcnt'>
              {dtlData[0].tld ? (
                <p
                  className={`dtl-para ${!isLight ? 'dtl-para-dark' : 'null'}`}
                >
                  <strong>Top Level Domain:</strong> {dtlData[0].tld[0]}
                </p>
              ) : null}
              {dtlData[0].currencies ? (
                <p
                  className={`dtl-para ${!isLight ? 'dtl-para-dark' : 'null'}`}
                >
                  <strong>Population:</strong>
                  {dtlData[0].population}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Error />
        </div>
      )}
    </div>
  );
};

export default Details;
