import React from 'react';
import Movie from './Movie';
require('../../styles/titlesListStyles.css');

const TitlesList = (props) => {
  var movieList = [];
  if(props.movies) {
    movieList = props.movies.map(movie => {
      return <Movie key={movie.imdbID} movie={movie} />
    })
  }
  return (
    <ul className='titlesList'>
      {movieList}
    </ul>
  )
}

export default TitlesList;