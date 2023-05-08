import React, { useContext } from 'react';
import { ApiDataContext } from '../../dataProvider/DataProvider';

import { useNavigate } from 'react-router-dom';

import './card.css';

const Card = ({ data }) => {
  const navigate = useNavigate();

  const { isLight, setCountryNameClicked } = useContext(ApiDataContext);

  return (
    <div className={!isLight ? 'main-card-cnt-dark' : 'main-card-cnt'}>
      <div className='card-img-cnt'>
        <img src={data.flags.svg} className='card-img' alt={data.flags.alt} />
      </div>
      <div className='card-data-cnt'>
        <button
          className={!isLight ? 'card-btn-dark' : 'card-btn'}
          onClick={() => {
            setCountryNameClicked(data.name.common);
            navigate('/dtls');
          }}
        >
          {data.name.common}
        </button>
        <p className={!isLight ? 'card-data-dark' : 'card-data'}>
          <strong>Population</strong>: {data.population}
        </p>
        <p className={!isLight ? 'card-data-dark' : 'card-data'}>
          <strong>Region:</strong> {data.region}
        </p>
        <p className={!isLight ? 'card-data-dark' : 'card-data'}>
          <strong>Capital:</strong> {data.capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
