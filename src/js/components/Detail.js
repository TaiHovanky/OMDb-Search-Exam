import React from 'react';

const Details = (props) => {
  return (
    <div>
      <img src={props.movieDetails.Poster} />
      <p>{props.movieDetails.Year}</p>
    </div>
  );
}

export default Details;