import React, { useState } from 'react';

import './header.css';

const Header = () => {
  const [isSelect, setIsSelect] = useState(true);

  const handleClick = () => {
    setIsSelect(true);
  };

  return (
    <div>
      <form>
        <button>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className=' bi-search'
            viewBox='0 0 16 16'
          >
            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
          </svg>
        </button>
        <input type='search' className='search-box' />
      </form>
      <div>
        <button onClick={handleClick} className=''>
          Filter by Region v
        </button>
        <div className={`select-btn-cnt ${isSelect ? 'active' : 'inactive'}`}>
          <button className='select-btn'>Africa</button>
          <button className='select-btn'>America</button>
          <button className='select-btn'>Asia</button>
          <button className='select-btn'>Europe</button>
          <button className='select-btn'>Oceania</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
