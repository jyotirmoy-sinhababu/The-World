import React, { useContext } from 'react';

import { ApiDataContext } from '../../dataProvider/DataProvider';

import './btnStyle.css';

import { useNavigate } from 'react-router-dom';

import { AiOutlineDoubleLeft } from 'react-icons/ai';

const BtnCnt = () => {
  const { isLight } = useContext(ApiDataContext);

  const navigate = useNavigate();

  const backBtnFunction = () => {
    navigate('/home');
  };

  return (
    <div className='back-btn-cnt'>
      <button
        className={`back-btn ${!isLight ? 'back-btn-dark' : 'back-btn-light'}`}
        onClick={() => {
          backBtnFunction();
        }}
      >
        <AiOutlineDoubleLeft />
        Back
      </button>
    </div>
  );
};

export default BtnCnt;
