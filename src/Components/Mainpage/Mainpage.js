import React from 'react';
import './style.css';
import Searchbar from './Searchbar';
import Movielist from '../Movielist/Movielist';

function Mainpage({ movieData, search }) {
  return (
    <div className='mainpage'>
      <h1 className='title'>Movie Api</h1>
      <Searchbar search={search} />
      <Movielist movieData={movieData} />
    </div>
  );
}

export default Mainpage;
