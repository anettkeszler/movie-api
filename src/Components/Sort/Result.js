import React from 'react';

function Result(props) {
  return (
    <div className='result'>
      {/* <img src={props.result?.Poster} alt='' /> */}
      <h3>{props.result?.Title}</h3>
    </div>
  );
}

export default Result;
