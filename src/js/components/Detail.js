import React from 'react';
require('../../styles/titleStyles.css');

const Details = (props) => {
  //if any movie detail field is equal to 'N/A', there's no need to display it
  if(props.movieDetails){
    return (
      <div className='filmDetail'>
        {props.movieDetails.Genre !== 'N/A' && <p>{props.movieDetails.Genre}</p>}
        {props.movieDetails.Plot !== 'N/A' && <p>{props.movieDetails.Plot}</p>}
        {props.movieDetails.Poster !== 'N/A' && <img className='poster' src={props.movieDetails.Poster} />}
        {props.movieDetails.Director !== 'N/A' && <p>Director: {props.movieDetails.Director}</p>}
        {props.movieDetails.Actors !== 'N/A' && <p>Stars: {props.movieDetails.Actors}</p>}
        <div className='imdbLink'>
          <a 
            href={`http://imdb.com/title/${props.movieDetails.imdbID}`} 
            target='_blank'
          >
            See this movie's IMDB page
          </a>
        </div>
      </div>
    );
  } else {
    return <div></div>
  }
}

export default Details;