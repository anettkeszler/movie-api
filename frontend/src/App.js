import React from 'react';
import './App.css';
import Mainpage from './Components/Mainpage/Mainpage';
import Sidebar from './Components/Sidebar/Sidebar';
import { MovieProvider } from './Components/Provider/MovieProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieDetail from './Components/DetailedPage/MovieDetail';
import { WatchlistProvider } from './Components/Provider/Watchlistprovider';
import Watchlist from './Components/Watchlist/Watchlist';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <WatchlistProvider>
        <MovieProvider>
          <React.Fragment>
            <Sidebar />
            <Switch>
              <Route exact={true} path='/' component={Mainpage} />
              <Route exact path='/movie/:imdbID' component={MovieDetail} />
              <Route exact path='/watchlist' component={Watchlist} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
            </Switch>
          </React.Fragment>
        </MovieProvider>
      </WatchlistProvider>
    </BrowserRouter>
  );
}

export default App;
