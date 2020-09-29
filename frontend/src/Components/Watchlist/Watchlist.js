import React, { useContext } from 'react';
import './style.css';
import { WatchlistContext } from '../Provider/Watchlistprovider';
import { Link } from 'react-router-dom';
import defaultPoster from '../MovieCard/default_poster.jpg';

export default function MovieCard() {
  let [watchlist] = useContext(WatchlistContext);
  console.log(watchlist);
  return (
    <div className='container'>
      <div className='watchlist-title'>This is your watch list </div>

      {watchlist.map((movie) => {
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
      })}
    </div>
  );
}
