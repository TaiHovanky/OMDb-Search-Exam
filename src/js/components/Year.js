import React from 'react';
require('../../styles/titleStyles.css');

const Year = (props) => {
  return (
    <p className={props.showDetails ? 'titleDetail' : props.poster !== 'N/A' ? 'filmTitle' : 'titleDetail'}>
      {props.year}
    </p>
  );
}

export default Year;