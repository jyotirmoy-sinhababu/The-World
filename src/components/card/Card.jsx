import React, { useContext } from 'react';

import { ApiDataContext } from '../../dataProvider/DataProvider';

import './card.css';

const Card = ({ data }) => {
  const { isLight } = useContext(ApiDataContext);

  return (
    <div>
      <div>
        <img src={data.flags.svg} className='img' alt={data.flags.alt} />
      </div>
      <div>
        <button onClick={(e) => {}}>{data.name.common}</button>
        <p>
          <strong>Population</strong>: {data.population}
        </p>
        <p>
          <strong>Region:</strong> {data.region}
        </p>
        <p>
          <strong>Capital:</strong> {data.capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
