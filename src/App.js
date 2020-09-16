import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Mainpage from './Components/Mainpage/Mainpage';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  const [movieData, setMovieData] = useState([]);
  const [input, setInput] = useState('');

  const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=8a2bf193';

  const handleInput = e => {
    let input = e.target.value;
    setInput(input);
  };

  const search = e => {
    if (e.preventDefault) {
      axios(url + '&s=' + input).then(data => {
        let results = data.data.Search;
        setMovieData(results);
        console.log(results);
      });
    }
  };

  useEffect(() => {
    const url = `http://www.omdbapi.com/?apikey=8a2bf193&s=star`;
    axios.get(url).then(res => {
      setMovieData(res.data.Search);
    });
  }, []);

  return (
    <React.Fragment>
      <Mainpage
        movieData={movieData}
        handleInput={handleInput}
        search={search}
      />
      <Sidebar />
    </React.Fragment>
  );
}

export default App;
