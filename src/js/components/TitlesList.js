import React from 'react';
import Title from './Title';

const TitlesList = (props) => {
  var movieList = [];
  if(props.movies) {
    movieList = props.movies.map(movie => {
      return <Title key={movie.imdbID} movie={movie} />
    })
  }
  return (
    <ul>
      {movieList}
    </ul>
  )
}

export default TitlesList;