import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BsSearch } from 'react-icons/bs';
import './header.css';

import { useContext } from 'react';
import { ApiDataContext } from '../../dataProvider/DataProvider';

const Header = () => {
  const { isLight, handleChange, handleSearch, handleRegionChange } =
    useContext(ApiDataContext);

  const navigate = useNavigate();
  const navigateToRegion = useNavigate();

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
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
          navigate('/search');
        }}
        className={`header-frm ${
          !isLight ? 'header-frm-dark' : 'header-frm-light'
        }`}
      >
        <button
          type='submit'
          className={`header-search-btn ${
            !isLight ? 'search-btn-dark' : 'search-btn-light'
          }`}
        >
          <BsSearch />
        </button>
        <input
          required
          type='search'
          onChange={(e) => {
            handleChange(e);
          }}
          name='name'
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
        <div
          className={`select-btn-cnt  ${!isSelect ? 'active' : 'inactive'} ${
            !isLight ? 'select-btn-cnt-dark' : 'select-btn-cnt '
          }`}
        >
          <button
            onClick={(Africa) => {
              handleRegionChange('africa');
              navigateToRegion('/region');
            }}
            className={`select-btn ${
              !isLight ? 'select-btn-dark' : 'select - btn'
            }`}
          >
            Africa
          </button>
          <button
            onClick={() => {
              handleRegionChange('america');
              navigateToRegion('/region');
            }}
            className={`select-btn ${
              !isLight ? 'select-btn-dark' : 'select - btn'
            }`}
          >
            America
          </button>
          <button
            onClick={(asia) => {
              handleRegionChange('asia');
              navigateToRegion('/region');
            }}
            className={`select-btn ${
              !isLight ? 'select-btn-dark' : 'select - btn'
            }`}
          >
            Asia
          </button>
          <button
            onClick={(europe) => {
              handleRegionChange('europe');
              navigateToRegion('/region');
            }}
            className={`select-btn ${
              !isLight ? 'select-btn-dark' : 'select - btn'
            }`}
          >
            Europe
          </button>
          <button
            onClick={(oceania) => {
              handleRegionChange('oceania');
              navigateToRegion('/region');
            }}
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
