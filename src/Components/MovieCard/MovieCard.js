import React, { useContext } from "react";
import "./style.css";
import defaultPoster from "./default_poster.jpg";
import { MovieContext } from "../Provider/MovieProvider";

export default function MovieCard() {
  let [movieData] = useContext(MovieContext);

  console.log(movieData);
  return movieData.map((movie) => {
    return (
      <div className="card">
        {movie.Poster === "N/A" ? (
          <img className="card-img" src={defaultPoster} alt="" />
        ) : (
          <img className="card-img" src={movie.Poster} alt="" />
        )}
        <div className="card-title">
          {movie.Title} ({movie.Year})
        </div>
      </div>
    );
  });
}
