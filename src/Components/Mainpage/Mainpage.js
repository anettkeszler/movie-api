import React from "react";
import "./style.css";
import Searchbar from "./Searchbar";
import Movielist from "../Movielist/Movielist";

function Mainpage() {
  return (
    <div className="mainpage">
      <h1 className="title">Movie Api</h1>
      <Searchbar />
      <Movielist />
    </div>
  );
}

export default Mainpage;
