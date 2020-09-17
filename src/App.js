import React from 'react';
import './App.css';
import Mainpage from './Components/Mainpage/Mainpage';
import Sidebar from './Components/Sidebar/Sidebar';
import { MovieProvider } from './Components/Provider/MovieProvider';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieDetail from './Components/DetailedPage/MovieDetail';

function App() {
  return (
    <BrowserRouter>
      <MovieProvider>
        <React.Fragment>
          <Sidebar />
          <Route
            exact
            path='/'
            render={movieData => (
              <React.Fragment>
                <Mainpage movieData={[movieData]} />
              </React.Fragment>
            )}
          />
          <Route exact path='/movie/:imdbID' render='/'>
            <MovieDetail />
          </Route>
        </React.Fragment>
      </MovieProvider>
    </BrowserRouter>
  );
}

export default App;
