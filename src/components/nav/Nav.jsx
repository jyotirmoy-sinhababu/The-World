import './nav.css';
import { BsFillMoonFill } from 'react-icons/bs';

import React, { useContext } from 'react';

import { ApiDataContext } from '../../dataProvider/DataProvider';

const Nav = () => {
  const { setIsLight, isLight } = useContext(ApiDataContext);

  return (
    <div className={`nav-cnt ${!isLight ? 'nav-dark' : 'nav-light'}`}>
      <div className='nav-para-cnt'>
        <p className={`nav-para ${!isLight ? 'para-dark' : 'para-light'}`}>
          Where in the world?
        </p>
      </div>
      <div className='nav-btn-cnt'>
        {isLight ? (
          <button
            className='nav-btn-light'
            onClick={() => {
              setIsLight(false);
            }}
          >
            <BsFillMoonFill />
            Dark Mode
          </button>
        ) : (
          <button
            className='nav-btn-dark'
            onClick={() => {
              setIsLight(true);
            }}
          >
            Light Mode
          </button>
        )}
      </div>
    </div>
  );
};

export default Nav;
