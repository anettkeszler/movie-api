import React from 'react';
import './style.css';
import Searchbar from './Searchbar';
import Movielist from '../Movielist/Movielist';

function Mainpage({ movieData, search, handleInput }) {
  return (
    <div className='mainpage'>
      <h1 className='title'>Movie Api</h1>
      <Searchbar search={search} handleInput={handleInput} />
      <Movielist movieData={movieData} />
    </div>
  );
}

export default Mainpage;
