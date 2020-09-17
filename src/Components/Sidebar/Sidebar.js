import React, { useContext, useState } from 'react';
import './Sidebar.css';
import Logo from '../assets/Logo.jpeg';
import axios from 'axios';
import { MovieContext } from '../Provider/MovieProvider';
import Footer from "../Footer/Footer";

function Sidebar() {
  const [movieData, setMovieData] = useContext(MovieContext);

  const handleValue = (e) => {
    let input = e.currentTarget.textContent;
    search(input);
  };

  const search = (input) => {
    let value = input;
    const url = `http://www.omdbapi.com/?apikey=8a2bf193&s=` + value;
    axios.get(url).then((res) => {
      setMovieData(res.data.Search);
    });
  };
  return (
    <div className='sidebar'>
      <div className='logo-container'>
        {' '}
        <img className='logo-img' src={Logo} alt='logo' />
      </div>
      <div className='sidebar-searches'>Popular searches</div>
      <ul className='popular-searches'>
        <li onClick={handleValue}>Superman</li>
        <li onClick={handleValue}>Star Wars</li>
        <li onClick={handleValue}>Harry Potter</li>
        <li onClick={handleValue}>Twilight</li>
      </ul>

      <Footer />
    </div>
  );
}
export default Sidebar;
