import React from 'react';
import './style.css';
import defaultPoster from './default_poster.jpg';

export default function MovieCard({ movieData }) {
  console.log(movieData);

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
}
