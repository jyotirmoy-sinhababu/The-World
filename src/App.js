import './App.css';
import FetchData from './dataProvider/DataProvider';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import MainCntPage from './pages/container/MainCntPage';
import Details from './components/details/Details';
import DisplaySearched from './pages/searchePage/DisplaySearched';
import DisplayRegion from './pages/searchePage/DisplayRegion';

function App() {
  return (
    <FetchData>
      <Routes>
        <Route path='/' element={<MainCntPage />}>
          <Route index element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/dtls' element={<Details />} />
          <Route path='/search' element={<DisplaySearched />} />
          <Route path='/region' element={<DisplayRegion />} />
        </Route>
      </Routes>
    </FetchData>
  );
}

export default App;
