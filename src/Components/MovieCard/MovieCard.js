import React from "react";
import "./style.css";

export default function MovieCard({ movieData }) {
  console.log(movieData);

  return movieData.map((movie) => {
    return (
      <div className="card">
        <img className="card-img" src={movie.Poster} alt="" />
        <div className="card-title">
          {movie.Title} ({movie.Year})
        </div>
      </div>
    );
  });
}
