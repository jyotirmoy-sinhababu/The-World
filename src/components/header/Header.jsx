import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import './header.css';

const Header = () => {
  const [isSelect, setIsSelect] = useState(false);

  const handleClick = () => {
    if (!isSelect) {
      setIsSelect(true);
    } else if (isSelect) {
      setIsSelect(false);
    }
  };

  return (
    <div>
      <form>
        <button>
          <BsSearch />
        </button>
        <input type='search' className='search-box' />
      </form>
      <div>
        <button onClick={handleClick} className=''>
          Filter by Region v
        </button>
        <div className={`select-btn-cnt ${!isSelect ? 'active' : 'inactive'}`}>
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
