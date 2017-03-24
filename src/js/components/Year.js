import React from 'react';
require('../../styles/titleStyles.css');

const Year = (props) => {
  //positioning of the Year component depends on if there is a poster thumbnail
  return (
    <p className={props.showDetails ? 'filmDetail' : props.poster !== 'N/A' ? 'hasPosterThumb' : 'noPoster'}>
      {props.year}
    </p>
  );
}

export default Year;