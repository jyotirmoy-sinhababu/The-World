import './App.css';
import FetchData from './dataProvider/DataProvider';

import HomePage from './pages/home/HomePage';

function App() {
  return (
    <FetchData>
      <div className='App'>
        <HomePage />
      </div>
    </FetchData>
  );
}

export default App;
