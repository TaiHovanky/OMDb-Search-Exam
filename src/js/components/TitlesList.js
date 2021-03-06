import React from 'react';
import Movie from './movie/Movie';
require('../../styles/titlesListStyles.css');

const TitlesList = (props) => {
  var movieList = props.movies.map(movie => {
    return <Movie key={movie.imdbID} movie={movie} />
  });

  return (
    <div className='titlesList'>
      {movieList}
    </div>
  )
}

export default TitlesList;