import React, { useContext, useEffect, useState } from 'react';
import { ApiDataContext } from '../../dataProvider/DataProvider';

import './details.css';

import { useNavigate } from 'react-router-dom';
import { AiOutlineDoubleLeft } from 'react-icons/ai';

import axios from 'axios';

const Details = () => {
  const navigate = useNavigate();

  const { isLight, countryNameClicked } = useContext(ApiDataContext);

  const [dtlData, setDtlData] = useState([]);

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
    <div>
      <div className='details-btn-cnt'>
        <button
          className={`details-btn ${
            !isLight ? 'details-btn-dark' : 'details-btn-light'
          }`}
          onClick={() => {
            backBtnFunction();
          }}
        >
          <AiOutlineDoubleLeft />
          Back
        </button>
      </div>
      {dtlData && dtlData.length ? (
        <div>
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
                    className={`dtl-para ${
                      !isLight ? 'dtl-para-dark' : 'null'
                    }`}
                  >
                    <strong>Top Level Domain:</strong> {dtlData[0].tld[0]}
                  </p>
                ) : null}
                {dtlData[0].currencies ? (
                  <p
                    className={`dtl-para ${
                      !isLight ? 'dtl-para-dark' : 'null'
                    }`}
                  >
                    <strong>Population:</strong>
                    {dtlData[0].population}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Details;
