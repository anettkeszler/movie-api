import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Mainpage from './Components/Mainpage/Mainpage';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  const [movieData, setMovieData] = useState([]);
  const [state, setState] = useState({
    input: '',
    results: [],
    selected: {},
  });

  const url = `http://www.omdbapi.com/?apikey=8a2bf193`;

  const search = e => {
    if (e.preventDefault) {
      axios(url + '&s=' + state.input).then(data => {
        let results = data.data.Search;

        setState(state => {
          return { ...state, results: results };
        });

        console.log(data.data);
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
      <Mainpage movieData={movieData} search={search} />
      <Sidebar />
    </React.Fragment>
  );
}

export default App;
