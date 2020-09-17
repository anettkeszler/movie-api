import React, { useContext, useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import { MovieContext } from '../Provider/MovieProvider';

const Searchbar = () => {
  const [movieData, setMovieData] = useContext(MovieContext);
  const [input, setInput] = useState('');
  const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=8a2bf193';

  const search = (e) => {
    if (e.preventDefault) {
      axios(url + '&s=' + input).then((data) => {
        let results = data.data.Search;
        setMovieData(results);
        console.log(movieData);
      });
    }
  };

  const handleInput = (e) => {
    let input = e.target.value;
    console.log(input);
    setInput(input);
  };

  useEffect(() => {
    const url = `http://www.omdbapi.com/?apikey=8a2bf193&`;
    axios.get(url).then((res) => {
      setMovieData(res.data.Search);
    });
  }, [setMovieData]);

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
