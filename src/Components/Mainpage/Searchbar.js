import React, { useState } from 'react';
import './style.css';
import axios from 'axios';

const Searchbar = () => {
  const [state, setState] = useState({
    input: '',
    results: [],
    selected: {},
  });

  const url = `http://www.omdbapi.com/?apikey=5848bcce`;

  const search = e => {
    if (e.preventDefault) {
      axios(url + '&s=' + state.input).then(data => {
        console.log(data.data.Search);
      });
    }
  };
  // const search = e => {
  //   if (e.preventDefault) {
  //     axios.get(url).then((res) => {
  //       setState(res.data);
  //     });
  //   }, []);

  const handleInput = e => {
    let input = e.target.value;
    setState(state => {
      return { ...state, input: input };
    });

    console.log(state.input);
  };

  // useEffect(() => {});

  return (
    <section className='search-bar'>
      <input
        onChange={handleInput}
        className='search-box'
        type='text'
        placeholder='Search for a movie'
      />
      <button onClick={search} className='search-button'>
        Search
      </button>
      {/* <Searchbar handleInput={handleInput} /> */}
    </section>
  );
};

export default Searchbar;
