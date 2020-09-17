import React, { useContext } from 'react';
import './movieDetail.css';
import { MovieContext } from '../Provider/MovieProvider';
// import defaultPoster from '../MovieCard/default_poster.jpg';

export function MovieDetail() {
  let [movieData] = useContext(MovieContext);

  console.log(movieData);

  return movieData.map(movie => {
    return (
      <div className='detail-container'>
        {/* {movie.Poster === 'N/A' ? ( */}
        {/* <img className='card-img' src={defaultPoster} alt='' />
        ) : ( */}
        <img className='card-img' src={movie.Poster} alt='' />
        {/* )} */}
        <div className='card-title'>
          {movie.Title} ({movie.Year})
        </div>
      </div>
    );
  });
}

export default MovieDetail;
