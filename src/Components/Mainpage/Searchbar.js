import React from 'react';
import './style.css';

const Searchbar = ({ search, handleInput }) => {
  return (
    <section className='search-bar'>
      <input
        onChange={handleInput}
        className='search-box'
        type='text'
        placeholder='Search for a movie...'
      />
      <button onClick={search} className='search-button'>
        Search
      </button>
    </section>
  );
};

export default Searchbar;
