import React from 'react';
require('../../styles/titleStyles.css');

const Year = (props) => {
  //positioning of the Year component depends on if there is a poster thumbnail
  return (
    <p className={props.showDetails ? 'titleDetail' : props.poster !== 'N/A' ? 'filmTitle' : 'titleDetail'}>
      {props.year}
    </p>
  );
}

export default Year;