import React, { useState, useEffect } from 'react';
import './style.css';
import { WatchlistContext } from '../Provider/Watchlistprovider';
import { Link } from 'react-router-dom';
import defaultPoster from '../MovieCard/default_poster.jpg';
import axios from 'axios';

export default function MovieCard() {
  let [watchlist, setWatchlist] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/watchlist/get')
      .then(response => {
        setWatchlist(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  });

  console.log(watchlist);
  return (
    <div className='container'>
      <div className='watchlist-title'>This is your watch list </div>

      {watchlist.map(movie => {
        return (
          <Link className='card' to={`/movie/${movie.imdbId}`}>
            {movie.Poster === 'N/A' ? (
              <img className='card-img' src={defaultPoster} alt='' />
            ) : (
              <img className='card-img' src={movie.poster} alt='' />
            )}
            <div className='card-titles'>
              {movie.title} ({movie.releaseYear})
            </div>
          </Link>
        );
      })}
    </div>
  );
}
