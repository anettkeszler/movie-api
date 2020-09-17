import React from 'react';
import './App.css';
import Mainpage from './Components/Mainpage/Mainpage';
import Sidebar from './Components/Sidebar/Sidebar';
import { MovieProvider } from './Components/Provider/MovieProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieDetail from './Components/DetailedPage/MovieDetail';

function App() {
  const mainPage = () => (
    <React.Fragment>
      <Mainpage />
    </React.Fragment>
  );

  // const detailPage = (movieData) => (
  //   <React.Fragment>
  //     <MovieDetail />
  //   </React.Fragment>
  // );

  return (
    <BrowserRouter>
      <MovieProvider>
        <React.Fragment>
          <Sidebar />
          <Switch>
            <Route exact={true} path='/' component={mainPage} />
            <Route exact path='/movie/:imdbID' component={MovieDetail} />
          </Switch>
        </React.Fragment>
      </MovieProvider>
    </BrowserRouter>
  );
}

export default App;
