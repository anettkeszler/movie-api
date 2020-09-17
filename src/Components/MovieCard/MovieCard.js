import React, { useContext } from 'react';
import './style.css';
import defaultPoster from './default_poster.jpg';
import { MovieContext } from '../Provider/MovieProvider';

export default function MovieCard() {
  let [movieData] = useContext(MovieContext);

  if (typeof movieData != 'undefined') {
    return movieData.map((movie) => {
      return (
        <div className='card'>
          {movie.Poster === 'N/A' ? (
            <img className='card-img' src={defaultPoster} alt='' />
          ) : (
            <img className='card-img' src={movie.Poster} alt='' />
          )}
          <div className='card-title'>
            {movie.Title} ({movie.Year})
          </div>
        </div>
      );
    });
  } else {
    return <div className='error-message'>Could not find any movie.</div>;
  }
}
