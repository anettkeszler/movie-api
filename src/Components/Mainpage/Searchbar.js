import React from "react";
import "./style.css";

const Searchbar = () => {
  return (
    <section className="search-bar">
      <input
        className="search-box"
        type="text"
        placeholder="Search for a movie"
      />
      <button className="search-button">Search</button>
    </section>
  );
};

export default Searchbar;
