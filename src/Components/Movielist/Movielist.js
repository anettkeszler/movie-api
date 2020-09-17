import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./style.css";

export default function Movielist({ movieData }) {
  return (
    <div className="container">
      <MovieCard movieData={movieData} />
    </div>
  );
}
