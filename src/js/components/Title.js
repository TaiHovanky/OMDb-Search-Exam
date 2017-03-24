import React from 'react';
import Expand from './Expand';
require('../../styles/titleStyles.css');

const Title = (props) => {
  //positioning of the Title component depends on if there is a poster thumbnail
  return (
    <h3
      className={props.showDetails ? 'noPoster' : props.poster !== 'N/A' ? 'hasPosterThumb' : 'noPoster'}
      onClick={props.displayDetails.bind(this)}
    >
      <Expand showDetails={props.showDetails} />
      {props.title}
    </h3>
  )
}

export default Title;