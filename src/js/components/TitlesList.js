import React from 'react';
import Title from './Title';
require('../../styles/titlesListStyles.css');

const TitlesList = (props) => {
  var movieList = [];
  if(props.movies) {
    movieList = props.movies.map(movie => {
      return <Title key={movie.imdbID} movie={movie} />
    })
  }
  return (
    <ul className='titlesList'>
      {movieList}
    </ul>
  )
}

export default TitlesList;