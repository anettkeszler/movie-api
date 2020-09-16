import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  let [movieData, setMovieData] = useState([]);
  console.log(movieData);

  useEffect(() => {
    const url = `http://www.omdbapi.com/?apikey=5848bcce&s=star`;
    axios.get(url).then((res) => {
      setMovieData(res.data.Search);
      console.log(res.data.Search);
    });
  }, []);
  return (
    <MovieContext.Provider value={movieData}>
      {props.children}
    </MovieContext.Provider>
  );
};
