import React from 'react';
import Expand from './Expand';
require('../../styles/titleStyles.css');

const Title = (props) => {
  return (
    <h3
      className={props.showDetails ? 'titleDetail' : props.poster !== 'N/A' ? 'filmTitle' : 'titleDetail'}
      onClick={props.displayDetails.bind(this)}
    >
      <Expand showDetails={props.showDetails} />
      {props.title}
    </h3>
  )
}

export default Title;