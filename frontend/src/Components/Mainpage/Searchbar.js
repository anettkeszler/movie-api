import React, { useContext, useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import { MovieContext } from '../Provider/MovieProvider';

const Searchbar = () => {
  const [movieData, setMovieData] = useContext(MovieContext);
  const [input, setInput] = useState('');

  const search = (e) => {
    if (e.preventDefault) {
      axios
        .post('http://localhost:8080/search', input, {
          headers: { 'Content-Type': 'text/plain' },
        })
        .then((response) => {
          setMovieData(response.data.Search);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(input);
    }
  };

  const handleInput = (e) => {
    let input = e.target.value;
    setInput(input);
  };

  useEffect(() => {
    const url = `http://localhost:8080/search`;
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
