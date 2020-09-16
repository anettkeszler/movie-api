import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Mainpage from "./Components/Mainpage/Mainpage";
import Sidebar from "./Components/Sidebar/Sidebar";
import { MovieProvider } from "./Components/Provider/MovieProvider";

function App() {
  return (
    <MovieProvider>
      <React.Fragment>
        <Mainpage />
        <Sidebar />
      </React.Fragment>
    </MovieProvider>
  );
}

export default App;
