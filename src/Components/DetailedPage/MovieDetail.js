import React, { useEffect, useState } from 'react';
import './movieDetail.css';
import axios from 'axios';

export function MovieDetail(props) {
  const [movieDetail, setMovieDetail] = useState([]);
  const imdbId = props.match.params.imdbID;
  console.log(imdbId);
  console.log(movieDetail);

  const url = `http://www.omdbapi.com/?i=${imdbId}&apikey=8a2bf193`;

  useEffect(() => {
    axios.get(url).then(res => setMovieDetail(res.data));
  }, [url]);

  return (
    <div className='detail-container'>
      {/* {movie.Poster === 'N/A' ? ( */}
      {/* <img className='card-img' src={defaultPoster} alt='' />
        ) : ( */}
      <img className='card-img' src={movieDetail?.Poster} alt='' />
      {/* )} */}
      <div className='card-title'>
        {movieDetail.Title} ({movieDetail.Year})
      </div>
    </div>
  );
}

export default MovieDetail;
