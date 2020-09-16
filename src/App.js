import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Mainpage from './Components/Mainpage/Mainpage';
import Sidebar from './Components/Sidebar/Sidebar';
import Results from './Components/Sort/Results';

function App() {
  const [movieData, setMovieData] = useState([]);
  const [state, setState] = useState({
    input: '',
    results: [],
    selected: {},
  });

  const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=8a2bf193';

  const handleInput = e => {
    let input = e.target.value;
    setState(prevState => {
      return { ...prevState, input: input };
    });
    console.log(state.input);
  };

  const search = e => {
    if (e.preventDefault) {
      axios(url + '&s=' + state.input).then(data => {
        let results = data.data;
        console.log(data.data.Search);

        setState(prevState => {
          return { ...prevState, results: results };
        });
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
        search={search}
        handleInput={handleInput}
      />
      <Sidebar />
      <Results results={state.results} />
    </React.Fragment>
  );
}

export default App;
