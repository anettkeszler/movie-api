import React from 'react';
import './style.css';

const Searchbar = props => {
  // const handleInput = e => {
  //   let input = e.target.value;
  //   setState(state => {
  //     return { ...state, input: input };
  //   });
  //   console.log(state.input);
  // };

  return (
    <section className='search-bar'>
      <input
        // onChange={handleInput}
        className='search-box'
        type='text'
        placeholder='Search for a movie'
      />
      <button onClick={props.search} className='search-button'>
        Search
      </button>
      {/* <Searchbar handleInput={handleInput} /> */}
    </section>
  );
};

export default Searchbar;
