import './nav.css';
import { BsFillMoonFill } from 'react-icons/bs';

import React, { useContext } from 'react';

import { ApiDataContext } from '../../dataProvider/DataProvider';

const Nav = () => {
  const { setIsLight } = useContext(ApiDataContext);

  return (
    <div className='nav-cnt'>
      <div className='nav-para-cnt'>
        <p className='para'>Where in the world?</p>
      </div>
      <div className='nav-btn-cnt'>
        <button
          className='nav-btn'
          onClick={() => {
            setIsLight(false);
          }}
        >
          <BsFillMoonFill />
          Dark Mode
        </button>
      </div>
    </div>
  );
};

export default Nav;
