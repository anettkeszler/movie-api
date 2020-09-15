import React from "react";
import "./style.css";
import Searchbar from "./Searchbar";

function Mainpage() {
  return (
    <div className="mainpage">
      <h1 className="title">Movie Api</h1>
      <Searchbar />
    </div>
  );
}

export default Mainpage;
