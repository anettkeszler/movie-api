import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  let [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const url = `http://localhost:8080/movie`;
    axios.get(url).then((res) => {
      setMovieData(res.data.Search);
    });
  }, []);

  return (
    <MovieContext.Provider value={[movieData, setMovieData]}>
      {props.children}
    </MovieContext.Provider>
  );
};
