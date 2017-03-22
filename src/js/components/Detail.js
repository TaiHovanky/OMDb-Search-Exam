import React from 'react';

const Details = (props) => {
  if(props.movieDetails){
    return (
      <div>
        {props.movieDetails.Genre && <p>{props.movieDetails.Genre}</p>}
        {props.movieDetails.Plot && <p>{props.movieDetails.Plot}</p>}
        {props.movieDetails.Poster && <img src={props.movieDetails.Poster} />}
        {props.movieDetails.Director && <p>Director: {props.movieDetails.Director}</p>}
        {props.movieDetails.Actors && <p>Stars: {props.movieDetails.Actors}</p>}
        <a 
          href={`http://imdb.com/title/${props.movieDetails.imdbID}`} 
          target='_blank'
        >
          See this movie's IMDB page
        </a>
      </div>
    );
  } else {
    return <div></div>
  }
}

export default Details;