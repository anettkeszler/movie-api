import React, { useEffect, useState, useContext } from "react";
import "./movieDetail.css";
import axios from "axios";
import { WatchlistContext } from "../Provider/Watchlistprovider";

export function MovieDetail(props) {
  const [movieDetail, setMovieDetail] = useState([]);
  const [watchlist, setWatchlist] = useContext(WatchlistContext);
  console.log(watchlist);
  const imdbId = props.match.params.imdbID;
  const url = `http://www.omdbapi.com/?i=${imdbId}&apikey=8a2bf193`;

  const add = () => {
    setWatchlist((prevWatchlist) => [...prevWatchlist, movieDetail]);
  };

  useEffect(() => {
    axios.get(url).then((res) => setMovieDetail(res.data));
  }, [url]);

  return (
    <div className="detail-container">
      <div className="card-title">
        <h2>
          {movieDetail.Title} ({movieDetail.Year})
        </h2>
      </div>
      <div className="poster-text-wrapper">
        <div className="poster-box">
          <img className="card-img" src={movieDetail?.Poster} alt="" />
        </div>
        <div className="text-box">
          <div>
            <span>Runtime: </span>
            {movieDetail.Runtime}
          </div>
          <div>
            <span>Genre: </span>
            {movieDetail.Genre}
          </div>
          <div>
            <span>Rating: </span>
            {movieDetail.imdbRating}
          </div>
          <div>
            <span>Director: </span>
            {movieDetail.Director}
          </div>
          <div>
            <span>Actors: </span>
            {movieDetail.Actors}
          </div>
          <div>
            <span>Awards: </span>
            {movieDetail.Awards}
          </div>
          <div>
            <br></br>
            <span>Plot: </span>
            {movieDetail.Plot}
          </div>
          <button onClick={add} className="search-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
