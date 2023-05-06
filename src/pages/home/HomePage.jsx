import React, { useContext } from 'react';
import { ApiDataContext } from '../../dataProvider/DataProvider';

import './homeStyle.css';

import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header';

const HomePage = () => {
  const { isLight } = useContext(ApiDataContext);

  return (
    <div className={!isLight ? 'home-cnt-dark' : 'home-cnt'}>
      <Nav />
      <Header />
    </div>
  );
};

export default HomePage;
