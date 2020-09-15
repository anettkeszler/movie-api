import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Mainpage from './Components/Mainpage/Mainpage';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 4; i++) {}
    const url = `http://www.omdbapi.com/?apikey=5848bcce&s=Superman&y=2006`;
    axios.get(url).then((res) => {
      setMovieData(res.data.Search);
    });
  }, []);

  return (
    <React.Fragment>
      <Mainpage movieData={movieData} />
      <Sidebar />
    </React.Fragment>
  );
}

export default App;
