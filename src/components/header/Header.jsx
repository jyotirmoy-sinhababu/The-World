import React, { useState } from 'react';

import { BsSearch } from 'react-icons/bs';
import './header.css';

import { useContext } from 'react';
import { ApiDataContext } from '../../dataProvider/DataProvider';

const Header = () => {
  const { isLight } = useContext(ApiDataContext);

  const [isSelect, setIsSelect] = useState(false);

  const handleClick = () => {
    if (!isSelect) {
      setIsSelect(true);
    } else if (isSelect) {
      setIsSelect(false);
    }
  };

  return (
    <div className={`header-cnt ${!isLight ? 'header-dark' : 'header-light'}`}>
      <form
        className={`header-frm ${
          !isLight ? 'header-frm-dark' : 'header-frm-light'
        }`}
      >
        <button
          className={`header-search-btn ${
            !isLight ? 'search-btn-dark' : 'search-btn-light'
          }`}
        >
          <BsSearch />
        </button>
        <input
          type='search'
          className={!isLight ? 'search-box-dark' : 'search-box'}
          placeholder='search for country...'
        />
      </form>

      <div
        className={`header-drpDownnBtn-cnt ${
          !isLight
            ? 'header-drpDownnBtn-cnt-dark'
            : 'header - drpDownnBtn - cnt'
        }`}
      >
        <button
          onClick={handleClick}
          className={`header-drp-btn ${
            !isLight ? 'header-drp-btn-dark' : 'header-drp-btn'
          }`}
        >
          Filter by Region v
        </button>
        <div className={`select-btn-cnt ${!isSelect ? 'active' : 'inactive'}`}>
          <button
            className={`select-btn ${
              !isLight ? 'select-btn-dark' : 'select - btn'
            }`}
          >
            Africa
          </button>
          <button
            className={`select-btn ${
              !isLight ? 'select-btn-dark' : 'select - btn'
            }`}
          >
            America
          </button>
          <button
            className={`select-btn ${
              !isLight ? 'select-btn-dark' : 'select - btn'
            }`}
          >
            Asia
          </button>
          <button
            className={`select-btn ${
              !isLight ? 'select-btn-dark' : 'select - btn'
            }`}
          >
            Europe
          </button>
          <button
            className={`select-btn ${
              !isLight ? 'select-btn-dark' : 'select - btn'
            }`}
          >
            Oceania
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
