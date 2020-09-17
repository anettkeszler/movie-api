import React, { useEffect, useState } from 'react';
import './movieDetail.css';
import axios from 'axios';

export function MovieDetail(props) {
  const [movieDetail, setMovieDetail] = useState([]);
  const imdbId = props.match.params.imdbID;
  console.log(imdbId);

  const url = `http://www.omdbapi.com/?i=${imdbId}&apikey=8a2bf193`;

  useEffect(() => {
    axios.get(url).then(res => setMovieDetail(res.data));
  }, [url]);

  return movieDetail.map(movie => {
    return (
      <div className='detail-container'>
        {/* {movie.Poster === 'N/A' ? ( */}
        {/* <img className='card-img' src={defaultPoster} alt='' />
        ) : ( */}
        <img className='card-img' src={movie?.Poster} alt='' />
        {/* )} */}
        <div className='card-title'>
          {movie.Title} ({movie.Year})
        </div>
      </div>
    );
  });
}

export default MovieDetail;
