import React, { useContext } from 'react';
import './style.css';
import defaultPoster from './default_poster.jpg';
import { MovieContext } from '../Provider/MovieProvider';
import { Link } from 'react-router-dom';

export default function MovieCard() {
  let [movieData] = useContext(MovieContext);

  if (typeof movieData != 'undefined' && movieData.length > 1) {
    return movieData.map((movie) => {
      return (
        <Link className='card' to={`/movie/${movie.imdbID}`}>
          {movie.Poster === 'N/A' ? (
            <img className='card-img' src={defaultPoster} alt='' />
          ) : (
            <img className='card-img' src={movie.Poster} alt='' />
          )}
          <div className='card-titles'>
            {movie.Title} ({movie.Year})
          </div>
        </Link>
      );
    });
  } else if (typeof movieData != 'undefined' && movieData.length === 1) {
    return (
      <Link className='card' to={`/movie/${movieData.imdbID}`}>
        {movieData.Poster === 'N/A' ? (
          <img className='card-img' src={defaultPoster} alt='' />
        ) : (
          <img className='card-img' src={movieData.Poster} alt='' />
        )}
        <div className='card-titles'>
          {movieData.Title} ({movieData.Year})
        </div>
      </Link>
    );
  } else {
    return <div className='error-message'>Could not find any movie.</div>;
  }
}
