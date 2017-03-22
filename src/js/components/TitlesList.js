import React from 'react';
import Title from './Title';
import { Col, Grid, Row } from 'react-bootstrap'

const TitlesList = (props) => {
  var movieList = [];
  if(props.movies) {
    movieList = props.movies.map(movie => {
      return <Title key={movie.imdbID} movie={movie} />
    })
  }
  return (
    <Col md={8} mdOffset={2}>
      <ul>
        {movieList}
      </ul>
    </Col>
  )
}

export default TitlesList;