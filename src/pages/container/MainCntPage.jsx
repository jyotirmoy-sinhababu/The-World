import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { ApiDataContext } from '../../dataProvider/DataProvider';

import Nav from '../../components/nav/Nav';
import './mainPageStyle.css';

const MainCntPage = () => {
  const { isLight } = useContext(ApiDataContext);

  return (
    <div
      className={`mainPage-cnt ${!isLight ? 'mainPage-cnt-dark' : 'mainpage'}`}
    >
      <Nav />
      <div
        className={`mainPage-outlet-cnt ${
          !isLight ? 'mainPage-outlet-cnt-dark' : 'mainPage-outlet-cnt'
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default MainCntPage;
