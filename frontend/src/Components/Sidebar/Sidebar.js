import React, { useContext } from 'react';
import './Sidebar.css';
import Logo from '../assets/Logo.jpeg';
import axios from 'axios';
import { MovieContext } from '../Provider/MovieProvider';
import { Link } from 'react-router-dom';

function Sidebar() {
  const randomIds = [
    'tt0111161',
    'tt0068646',
    'tt0071562',
    'tt0468569',
    'tt0050083',
    'tt0108052',
    'tt0167260',
    'tt0110912',
    'tt0060196',
    'tt0120737',
    'tt0137523',
    'tt0109830',
    'tt1375666',
    'tt0080684',
    'tt0167261',
    'tt0133093',
    'tt0099685',
    'tt0073486',
    'tt0047478',
    'tt0114369',
  ];
  const [movieData, setMovieData] = useContext(MovieContext);

  const getRandomID = () => {
    return randomIds[Math.floor(Math.random() * randomIds.length)];
  };

  const handleValue = (e) => {
    let input = e.currentTarget.textContent;
    search(input);
  };

  const search = (input) => {
    let value = input;
    axios
      .post('http://localhost:8080/search', value, {
        headers: { 'Content-Type': 'text/plain' },
      })
      .then((response) => {
        setMovieData(response.data.Search);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(input);
  };

  return (
    <div id="mySidebar" className='sidebar'>
      <Link to={'/'}>
        <div className='logo-container'>
          {' '}
          <img className='logo-img' src={Logo} alt='logo' />
        </div>
      </Link>
      <div>
        <Link to={'/register'}>
          <div className='watchlist-button'>Sign up</div>
        </Link>
      </div>
      <div>
        <Link to={'/login'}>
          <div className='watchlist-button'>Login</div>
        </Link>
      </div>
      <div className='sidebar-searches'>Popular searches:</div>
      <div className='popular-searches'>
        <div className='div_link'>
          <Link to={`/`} onClick={handleValue}>
            <p className='div_link'>Superman</p>
          </Link>
        </div>
        <div className='div_link'>
          <Link to={`/`} onClick={handleValue}>
            <p className='div_link'>Star Wars</p>
          </Link>
        </div>
        <div className='div_link'>
          <Link to={`/`} onClick={handleValue}>
            <p className='buton-test'>Harry Potter</p>
          </Link>
        </div>
        <div className='div_link'>
          <Link to={`/`} onClick={handleValue}>
            <p className='div_link'>Twilight</p>
          </Link>
        </div>
      </div>
      <div>
        <Link to={`/movie/${getRandomID()}`}>
          <div className='random-button'>Random Movie</div>
        </Link>
      </div>
      <div>
        <Link to={'/watchlist'}>
          <div className='watchlist-button'>Watchlist</div>
        </Link>
      </div>
    </div>
  );
}
export default Sidebar;
