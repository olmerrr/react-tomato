import { useState } from 'react';
import  './Search.css';

export const Search = ({ cb = Function.prototype }) => {
  const [value, setValue] = useState('');
  const handleKey = (event) => {
    if (event.key === 'Enter' || event.target.value.length >= 3) {
      handleSubmit();
    }
    return;
  };
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className='row'>
      <div className='input-field col s12'>
        <input
          type='search'
          className='search-field'
          id='search-field'
          placeholder='Search your recipe'
          onKeyDown={handleKey}
          onChange={handleOnChange}
          value={value}
        />

        <button className='btn search-btn' onClick={handleSubmit}>
          Search
        </button>
      </div>
    </div>
  );
};
